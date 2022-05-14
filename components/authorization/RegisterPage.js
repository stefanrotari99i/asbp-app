import { SafeAreaView, TextInput, View, Text, StyleSheet, TouchableOpacity} from "react-native"
import React, {useRef, useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from "../buttons/Buttons";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { PrimaryHeader } from "../Headers";

export const RegisterPage = ({navigation}) => {
    const mailRef = useRef();
    const passRef = useRef();
    const passrepRef = useRef();
    const [eneredPass, setEnteredPass] = useState('')
    const [repeatPas, setRepeatPass] = useState('')
    return(
        <SafeAreaView style={css.container}>
            <KeyboardAwareScrollView style={{flex: 1}}>
                <PrimaryHeader navigation={navigation}/>
                <View style={css.wrapper}>
                    <View style={css.inputcontainer}>
                        <Text style={css.inputtext}>Name</Text>
                        <View style={css.inputwrapper}>
                            <TextInput style={css.input} keyboardAppearance={'dark'} returnKeyType="next" onSubmitEditing={() => { mailRef.current.focus(); }} blurOnSubmit={false} placeholder='John Doe' placeholderTextColor={'rgba(255,255,255, .5)'}/>
                        </View>
                    </View>
                    <View style={css.inputcontainer}>
                        <Text style={css.inputtext}>Email</Text>
                        <View style={css.inputwrapper}>
                            <TextInput style={css.input} keyboardType='email-address'  keyboardAppearance={'dark'} ref={mailRef} returnKeyType="next" onSubmitEditing={() => { passRef.current.focus(); }} blurOnSubmit={false} placeholder='mail@example.com' placeholderTextColor={'rgba(255,255,255, .5)'}/>
                        </View>
                    </View>
                    <View style={css.inputcontainer_last}>
                        <Text style={css.inputtext}>Password</Text>
                        <View style={css.inputwrapper}>
                            <TextInput style={css.input} keyboardAppearance={'dark'} ref={passRef} returnKeyType="next" onSubmitEditing={() => { passrepRef.current.focus();}} value={eneredPass} onChangeText={text => setEnteredPass(text)} blurOnSubmit={false} placeholder='Pick a strong password' placeholderTextColor={'rgba(255,255,255, .5)'} secureTextEntry={true}/>
                        </View>
                    </View>
                    <View style={css.inputcontainer_last}>
                        <Text style={css.inputtext}>Repeat password</Text>
                        <View style={ eneredPass == repeatPas ? css.inputwrapper : css.wrongrepeat}>
                            <TextInput ref={passrepRef} keyboardAppearance={'dark'} value={repeatPas} onChangeText={text => setRepeatPass(text)} placeholder='Repeat password' placeholderTextColor={'rgba(255,255,255, .5)'} secureTextEntry={true} style={ css.input} />
                            {eneredPass != repeatPas ? <Text style={{color: 'crimson', marginTop: 10, alignSelf: 'flex-start', marginLeft: 15}}>Password doesn't match</Text> : null}
                        </View>
                    </View>
                    <PrimaryButton caption={'Create Account'}/>
                    <View style={css.infocontainer}>
                        <Text style={css.infotext}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={css.infotext_2}>Log In</Text>
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
        justifyContent: 'space-between'

    },
    
    wrapper: {
        flex: .83,
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