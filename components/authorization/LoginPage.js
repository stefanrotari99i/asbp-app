import { SafeAreaView, TextInput, View, Text, StyleSheet, TouchableOpacity, Vibration} from "react-native"
import {AppleButton, GoogleButton, PrimaryButton} from '../buttons/Buttons'
import { Ionicons } from '@expo/vector-icons'; 
import React, {useRef, createRef} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { PrimaryHeader } from "../Headers";
import { useState } from "react/cjs/react.production.min";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db, auth} from "../firebase_api/config";
import { collection, addDoc,setDoc, doc,Timestamp } from "firebase/firestore"; 
import EmailValidator from 'aj-email-validator'
import { CommonActions } from "@react-navigation/native";


export class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.passRef = createRef();
        this.mailRef = createRef();
        this.state={
            error:false,
            errormsg:"",
            generalError: false,
            mailError: false,
            passError: false,
            email:"",
            password:""
        }
    }

    login_callback(){
        signInWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

          this.props.navigation.navigate("Main");
          this.props.navigation.dispatch({
            ...CommonActions.reset({
              index: 0,
              routes: [{ name: "Main" }]
            })
          });
        })
        .catch((error) => {
            this.setState({error: true})
            console.log(error.code)
            if(this.state.email.length == 0 && this.state.password.length == 0 && error.code == 'auth/invalid-email'){
                this.setState({errormsg: 'Email and password field must not be blank .'})
                this.setState({generalError: true})
                this.setState({mailError: false})
                this.setState({passError: false})
                this.mailRef.current.focus();
            }

            else if(error.code == 'auth/wrong-password' || error.code == 'auth/invalid-password') {
                this.setState({errormsg: 'Wrong password.'})
                this.setState({passError: true})
                this.setState({generalError: false})
                this.setState({mailError: false})
                this.passRef.current.focus();
            }

            else if(error.code == 'auth/invalid-email') {
                this.setState({errormsg: 'Email address does not match a valid user account.'})
                this.setState({passError: false})
                this.setState({generalError: false})
                this.setState({mailError: true})
                this.mailRef.current.focus();
            }

            else if(error.code == 'auth/too-many-requests') {
                this.setState({errormsg: 'Too many requests, try again later.'})
                this.setState({passError: false})
                this.setState({generalError: true})
                this.setState({mailError: false})
            } else {
                this.setState({errormsg: 'Something went wrong. Please try again.'})
                this.setState({passError: false})
                this.setState({generalError: true})
                this.setState({mailError: false})
            }
        });
    }

    ivalidMailError(){
        this.setState({errormsg: 'Please enter a valid email address.', mailError: true, passError: false, generalError: false, error: true});
        this.mailRef.current.focus();
    }

    render() {
        return(
            <SafeAreaView style={css.container}>
                <KeyboardAwareScrollView style={{flex: 1}}>
                    <PrimaryHeader  navigation={this.props.navigation} caption={'Log in'}/>
                    <View style={css.wrapper}>
                        <AppleButton caption={'Continue with Apple'}/>
                        <GoogleButton caption={'Continue with Google'} />
                        <View style={css.separator}>
                            <View style={css.separatorline}></View>
                            <Text style={css.separatortext}>OR</Text>
                        </View>
                        <View style={css.inputcontainer}>
                            {this.state.error == true && <Text style={{color: 'crimson', marginTop: 10, marginBottom:19, alignSelf: 'center',textAlign:'center', marginLeft: 15}}>{this.state.errormsg}</Text> }
                            <Text style={css.inputtext}>Email</Text>
                            <View style={this.state.generalError || this.state.mailError ? css.wrong: css.inputwrapper}>
                                <TextInput
                                style={css.input}
                                keyboardType='email-address'
                                placeholder='mail@example.com'
                                placeholderTextColor={'rgba(255,255,255, .5)'}
                                returnKeyType="next"
                                keyboardAppearance={'dark'}
                                ref={this.mailRef}
                                onSubmitEditing={() => {
                                  this.passRef.current.focus();
                                }}
                    
                                blurOnSubmit={false}
                                value={this.state.email} 
                                onChangeText={text=>this.setState({email:text})}
                                />
                            </View>
                        </View>
                        <View style={css.inputcontainer_last}>
                            <Text style={css.inputtext}>Password</Text>
                            <View style={this.state.passError || this.state.generalError ? css.wrong : css.inputwrapper}>
                                <TextInput
                                 style={css.input} 
                                 ref={this.passRef}  
                                 keyboardAppearance={'dark'} 
                                 placeholder='************' 
                                 placeholderTextColor={'rgba(255,255,255, .5)'} 
                                 secureTextEntry={true}
                                 value={this.state.password} 
                                 onChangeText={text=>this.setState({password:text})}
                                 />
                            </View>
                        </View>
                        <PrimaryButton caption={'Log In'} action={() => {EmailValidator(this.state.email) == false? this.ivalidMailError() :this.login_callback()}}/>
                        <View style={css.infocontainer}>
                            <Text style={css.infotext}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                                <Text style={css.infotext_2}>Sign Up</Text>
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
        justifyContent: 'space-between',

    },
    
    wrapper: {
        flex: .85,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'

    },

    header: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flex: .1,
        marginBottom: 40,
        marginTop: 20
    },

    headertext: {
        fontSize: 28,
        color: '#fff',
        fontWeight: '700'
    },

    headeback: {
        borderColor: 'rgba(255,255,255, .1)',
        borderWidth: 2,
        paddingVertical: 6,
        paddingHorizontal: 7,
        borderRadius: 12,
        marginRight: 25

    },

    input: {
        width: '85%',
        height: '100%',
        color: '#fff',
        fontWeight: '500',
        fontSize: 15
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
    },

    separator: {
        width: '90%',
        marginTop: 20,
        marginBottom: 30
    },

    separatortext: {
        color: 'rgba(255,255,255, .4)',
        fontWeight: '600',
        position: 'absolute',
        backgroundColor: '#121212',
        left: '45%',
        top: -18,
        padding: 10,
        borderRadius: 50
    },

    separatorline: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(255,255,255, .06)',
    },

    inavlidcredit: {
        color: 'crimson',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 25,
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

})