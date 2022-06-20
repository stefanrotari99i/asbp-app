import { SafeAreaView, TextInput, View, Text, StyleSheet, TouchableOpacity, Vibration} from "react-native"
import {AppleButton, GoogleButton, PrimaryButton} from '../buttons/Buttons'
import { Ionicons } from '@expo/vector-icons'; 
import React, {useRef} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { PrimaryHeader } from "../Headers";
import API  from "../API_db.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react/cjs/react.production.min";


const firebaseConfig = {
    apiKey: "AIzaSyAuNFZI5vXu90Ez3ZpFjW6hReE2HzdbEO8",
    authDomain: "drink-mate.firebaseapp.com",
    databaseURL: "https://drink-mate-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "drink-mate",
    storageBucket: "drink-mate.appspot.com",
    messagingSenderId: "328255996501",
    appId: "1:328255996501:web:7b6a08eb4c1ecce4ec0adc",
    measurementId: "G-CBD5TP42PK"
  };


export const LoginPage = ({navigation}) => {
    const [error, setError] = React.useState(false);
    const [errormsg, setMsgError] = React.useState("");
    const [mailerror, setMailError] = React.useState(false)
    const passRef = useRef();
    const [mail, setMail] = React.useState("");
    const [pass, setPass] = React.useState("");

    function handler(email,password, navigation){
        const app = initializeApp(firebaseConfig);
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log('ss')
        navigation.navigate('Main')
        navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
          });
    
      })
      .catch((error) => {
        console.log(error.message)
        setError(true)
        Vibration.vibrate(200, false)
        if(error.message == 'Firebase: Error (auth/invalid-email).' && mail.length == 0 && password.length == 0)
            setMsgError('Email and password field is required.')
        else if(error.message == 'Firebase: Error (auth/wrong-password).')
            setMsgError('Invalid password')
        else if(error.message == 'Firebase: Error (auth/invalid-email).') {
            setMailError(true)
            setMsgError('Invalid email.')
        }
        else if(error.message == 'Firebase: Error (auth/user-not-found).')
            setMsgError('User not found.')
        else if(error.message == 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).')
            setMsgError('Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.')
        else 
         setMsgError('Something went wrong. Please try again.')
      });
    }

    return(
        <SafeAreaView style={css.container}>
            <KeyboardAwareScrollView style={{flex: 1}}>
                <PrimaryHeader  navigation={navigation}/>
                <View style={css.wrapper}>
                    <AppleButton caption={'Continue with Apple'}/>
                    <GoogleButton caption={'Continue with Google'} />
                    <View style={css.separator}>
                        <View style={css.separatorline}></View>
                        <Text style={css.separatortext}>OR</Text>
                    </View>
                    {/* <Text style={css.inavlidcredit}>Invalid credentials! Please check your email and password and try again.</Text> */}
                    <View style={css.inputcontainer}>
                        {error == true && <Text style={{color: 'crimson', marginTop: 10, marginBottom:19, alignSelf: 'center',textAlign:'center', marginLeft: 15}}>{errormsg}</Text> }
                        <Text style={css.inputtext}>Email</Text>
                        <View style={error ? css.wrong : css.inputwrapper}>
                            <TextInput
                            style={css.input}
                            keyboardType='email-address'
                            placeholder='mail@example.com'
                            placeholderTextColor={'rgba(255,255,255, .5)'}
                            returnKeyType="next"
                            keyboardAppearance={'dark'}
                            onSubmitEditing={() => {
                              passRef.current.focus();
                            }}
                            blurOnSubmit={false}
                            value={mail}
                            onChangeText={mail => setMail(mail)}
                            />
                        </View>
                    </View>
                    <View style={css.inputcontainer_last}>
                        <Text style={css.inputtext}>Password</Text>
                        <View style={error ? css.wrong : css.inputwrapper}>
                            <TextInput
                             style={css.input} 
                             ref={passRef}  
                             keyboardAppearance={'dark'} 
                             placeholder='************' 
                             placeholderTextColor={'rgba(255,255,255, .5)'} 
                             secureTextEntry={true}
                             value={pass}
                             onChangeText={pass => setPass(pass)}
                             />
                        </View>
                    </View>
                    <PrimaryButton caption={'Log In'} action={() => handler(mail,pass, navigation)}/>
                    <View style={css.infocontainer}>
                        <Text style={css.infotext}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={css.infotext_2}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>

    )
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
        backgroundColor: '#1a1a1a',
        borderColor: 'crimson',
        borderWidth: 1,
        height: 58,
        borderRadius: 10,
        alignItems: 'center',
        textAlign: 'center'
    },

})