import { SafeAreaView, TextInput, View, Text, StyleSheet, TouchableOpacity} from "react-native"
import React, {useRef, useState, createRef} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from "../buttons/Buttons";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { PrimaryHeader } from "../Headers";
import { render } from "react-dom";
import { db, auth} from "../firebase_api/config";
import { validateEmail } from "../TextFormat";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { collection, addDoc,setDoc, doc,Timestamp } from "firebase/firestore"; 
import EmailValidator from 'aj-email-validator'
import { CommonActions } from "@react-navigation/native";

export class RegisterPage  extends React.Component{
    constructor(props) {
        super(props);
        this.mailRef = createRef();
        this.passRef = createRef();
        this.repeatPassRef = createRef();

        this.state={
            password:"",
            rep_password:"null",
            email:"",
            login_state:false,
            full_name:"",
            error: false,
            errorMsg: '',
            passwordError: false,
            mailError: false,
            fullnameError: false,
            repeatPassError: false,
            generalError: false,
        }

    };

    registerErrorPrint() {
        if(this.state.rep_password != this.state.password && this.state.email.length != 0 && this.state.full_name.length != 0 && this.state.password.length != 0)
            this.setState({errorMsg: 'Password and confirm password does not match.', repeatPassError: true, passwordError: false, mailError: false, fullnameError: false, error: true, generalError: false });
        else if(this.state.password.length == 0 || this.state.full_name.length == 0 || this.state.email.length == 0 || this.state.rep_password.length == 0 )
            this.setState({errorMsg: 'All fields must be completed', repeatPassError: true, passwordError: true, mailError: true, fullnameError: true, error: true, generalError: true});
        else if(EmailValidator(this.state.email) == false && this.state.email.length != 0)
            this.setState({errorMsg: 'Please enter a valid email address.', repeatPassError: false, passwordError: false, mailError: true, fullnameError: false, error: true, generalError: false});
        else if(this.state.password.length < 6 && this.state.email.length != 0 && this.state.full_name.length != 0)
            this.setState({errorMsg: 'Your password must contain at least 6 characters', repeatPassError: true, passwordError: true, mailError: false, fullnameError: false, error: true, generalError: false});
        else 
            this.setState({errorMsg: 'Something went wrong. Please try agasadadasn.', error: true, passwordError: false, mailError: false, fullname: false, repeatPassError: false, generalError: false})
    }

    verify() {
        return ((this.state.password==this.state.rep_password) && (EmailValidator(this.state.email)) && (this.state.password.length>=6) && (this.state.full_name.length >2));
    }
    
    register_callback(){
        if(!this.verify()) {
            this.registerErrorPrint();
            return
        }
        const fullname = this.state.full_name;

       //Register used 
        createUserWithEmailAndPassword(auth,this.state.email, this.state.password)
        .then((response) => {
            const uid = response.user.uid;
            const data = {
                id: uid,
                email:this.state.email,
                name:fullname,
                email_verified:false
            };
            console.log(data)
            
         //Add user in database
        setDoc(doc(db, "users",data.id), data).then((response)=>{
            this.props.navigation.navigate('Main')
            this.props.navigation.dispatch({
                ...CommonActions.reset({
                  index: 0,
                  routes: [{ name: "Main" }]
                })
              });
            
        }).catch((error)=>{
            console.log(error.code)
            this.setState({error: true})
            if(error.code == 'auth/email-already-in-use') 
                this.setState({errorMsg: 'This email address is already being used', mailError: true, fullnameError: false, passwordError: false, repeatPassError: false})
            else if(error.code == 'auth/wrong-password')
                this.setState({errorMsg: 'Wrong password.', passwordError: true, repeatPassError: true, mailError: false, fullnameError: false})
            else if(error.code == 'auth/weak-password')
                this.setState({errorMsg: 'Weak password. Please enter a stronger password.', passwordError: true, repeatPassError: true, mailError: false, fullnameError: false})
            else 
            this.setState({errorMsg: 'Something went wrong. Please try again.', passwordError: true, repeatPassError: true, mailError: true, fullnameError: true})
        });

            
        }).catch((error) => {
          console.log(error.message);
    });
    }

    render() {
        return(
            <SafeAreaView style={css.container}>
                <KeyboardAwareScrollView style={{flex: 1}}>
                    <PrimaryHeader navigation={this.props.navigation} caption={'Sign up'}/>
                    <View style={css.wrapper}>
                        {this.state.error && <Text style={{color: 'crimson', marginTop: 4, marginBottom: 10, alignSelf: 'center',}}>{this.state.errorMsg}</Text>}
                        <View style={css.inputcontainer}>
                            <Text style={css.inputtext}>Name</Text>
                            <View style={this.state.fullnameError || this.state.generalError ? css.wrong : css.inputwrapper}>
                                <TextInput style={css.input} name='name' keyboardAppearance={'dark'}  returnKeyType="next"  value={this.state.full_name} onChangeText={text=>this.setState({full_name:text})} blurOnSubmit={false} onSubmitEditing={() => { this.mailRef.current.focus(); }} placeholder='John Doe' placeholderTextColor={'rgba(255,255,255, .5)'}/>
                            </View>
                        </View>
                        <View style={css.inputcontainer}>
                            <Text style={css.inputtext}>Email</Text>
                            <View style={this.state.mailError || this.state.generalError ? css.wrong : css.inputwrapper}>
                                <TextInput style={css.input} keyboardType='email-address'  ref={this.mailRef} value={this.state.email}  onChangeText={text=>this.setState({email:text})} keyboardAppearance={'dark'} returnKeyType="next"  blurOnSubmit={false} onSubmitEditing={() => { this.passRef.current.focus(); }} placeholder='mail@example.com' placeholderTextColor={'rgba(255,255,255, .5)'}/>
                            </View>
                        </View>
                        <View style={css.inputcontainer_last}>
                            <Text style={css.inputtext}>Password</Text>
                            <View style={this.state.passwordError || this.state.generalError ? css.wrong : css.inputwrapper}>
                                <TextInput style={css.input} keyboardAppearance={'dark'} ref={this.passRef} returnKeyType="next"  value={this.state.password}  onChangeText={text=>this.setState({password:text})} blurOnSubmit={false} onSubmitEditing={() => { this.repeatPassRef.current.focus(); }} placeholder='Pick a strong password' placeholderTextColor={'rgba(255,255,255, .5)'} secureTextEntry={true}/>
                            </View>
                        </View>
                        <View style={css.inputcontainer_last}>
                            <Text style={css.inputtext}>Repeat password</Text>
                            <View style={this.state.repeatPassError || this.state.generalError ? css.wrong : css.inputwrapper}>
                                <TextInput  keyboardAppearance={'dark'} ref={this.repeatPassRef} value={this.state.rep_password}  onChangeText={text=>this.setState({rep_password:text})} placeholder='Repeat password' placeholderTextColor={'rgba(255,255,255, .5)'} secureTextEntry={true} style={ css.input} />
                            </View>
                        </View>
                        <PrimaryButton caption={'Create Account'} action={()=> this.register_callback()}/>
                        <View style={css.infocontainer}>
                            <Text style={css.infotext}>Already have an account?</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={css.infotext_2}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }

}

const css = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'space-between'

    },
    
    wrapper: {
        flex: .83,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'

    },

    input: {
        width: '85%',
        height: '100%',
        color: '#fff',
        fontWeight: '500',
        fontSize: 15
    },

    wrong: {
        backgroundColor: '#1c1111',
        borderColor: 'crimson',
        borderWidth: 1,
        height: 58,
        borderRadius: 10,
        alignItems: 'center',
        textAlign: 'center'
    },

    wrongrepeat: {
        backgroundColor: '#1a1a1a',
        borderColor: 'crimson',
        borderWidth: 1,
        height: 58,
        borderRadius: 10,
        alignItems: 'center'
    },

    inputcontainer: {
        width: '100%',
        marginBottom: 25
    },

    inputcontainer_last: {
        width: '100%',
        marginBottom: 35
    },

    inputtext: {
        color: '#fff',
        fontSize: 15,
        marginBottom: 10,
        marginLeft: 15,
        fontWeight: '600'
    },

    inputwrapper: {
        backgroundColor: '#1a1a1a',
        borderColor: '#2e2e2e',
        borderWidth: 1,
        height: 58,
        borderRadius: 10,
        alignItems: 'center'
    },

    infocontainer: {
        flexDirection: 'row',
        marginTop: 5,
    },

    infotext: {
        color: 'rgba(255,255,255, .8)',
        fontSize: 15,
        fontWeight: '500'
    },

    infotext_2: {
        color: 'rgba(255,255,255, 1)',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 10,
    }

})