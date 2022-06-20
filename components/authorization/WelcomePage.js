import { SafeAreaView, View, StyleSheet, Text, ImageBackground} from "react-native"
import { OutlineButton, PrimaryButton } from "../buttons/Buttons"
import { LinearGradient } from 'expo-linear-gradient';
import React,{useEffect} from 'react';
import { CommonActions } from "@react-navigation/native";

import { getAuth, signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import { db, auth} from "../firebase_api/config";
import { collection, addDoc,setDoc, doc,Timestamp } from "firebase/firestore"; 





export const WelcomePage = ({navigation}) => {
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              const uid = user.uid;
              navigation.navigate("Main")
              navigation.dispatch({
                ...CommonActions.reset({
                  index: 0,
                  routes: [{ name: "Main" }]
                })
              });
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
        },[]);

    return(
        <View style={{flex: 1}}>
            <ImageBackground style={css.imageBg} resizeMode={'cover'} source={{uri: 'https://images.theconversation.com/files/427412/original/file-20211020-20-smslqk.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'}} />
            <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 1)']}
                style={css.gradient}
            />
            <SafeAreaView style={css.wrapper}>
                <View style={css.container}>
                    <Text style={css.maintext}>Drinkmate</Text>
                    <Text style={css.subtitle}>Make your day unforgettable</Text>
                    <PrimaryButton caption={'Get started'} action={() => navigation.navigate('Login')}/>
                    <OutlineButton caption={'Register'} action={() => navigation.navigate('Register')}/>
                </View>
            </SafeAreaView>
        </View>
    )
}


const css = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },

    maintext: {
        color: '#fff',
        fontSize: 52,
        maxWidth: 400,
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: '700'
    },

    subtitle: {
        color: '#fff',
        fontSize: 16,
        maxWidth: 300,
        textAlign: 'center',
        marginBottom: 80,
        fontWeight: '600'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 50,
        width: '90%'
    },

    imageBg: {
        flex: 1, 
    },

    gradient: {
        position: 'absolute',
        width: '100%',
        height: '80%',
        bottom: 0
    }

})