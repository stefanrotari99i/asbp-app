import { SafeAreaView, TextInput, View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {AppleButton, GoogleButton, PrimaryButton} from '../buttons/Buttons'
import { Ionicons } from '@expo/vector-icons'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export const LoginPage = ({navigation}) => {
    return(
        <SafeAreaView style={css.container}>
            <KeyboardAwareScrollView style={{flex: 1}}>
                <View style={css.header}>
                    <TouchableOpacity style={css.headeback} onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back-sharp" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={css.headertext}>Log In</Text>
                </View>
                <View style={css.wrapper}>
                    <AppleButton caption={'Continue with Apple'}/>
                    <GoogleButton caption={'Continue with Google'} />
                    <View style={css.separator}>
                        <View style={css.separatorline}></View>
                        <Text style={css.separatortext}>OR</Text>
                    </View>
                    {/* <Text style={css.inavlidcredit}>Invalid credentials! Please check your email and password and try again.</Text> */}
                    <View style={css.inputcontainer}>
                        <Text style={css.inputtext}>Email</Text>
                        <View style={css.inputwrapper} >
                            <TextInput style={css.input} placeholder='mail@example.com' placeholderTextColor={'rgba(255,255,255, .5)'}/>
                        </View>
                    </View>
                    <View style={css.inputcontainer_last}>
                        <Text style={css.inputtext}>Password</Text>
                        <View style={css.inputwrapper}>
                            <TextInput style={css.input}  placeholder='************' placeholderTextColor={'rgba(255,255,255, .5)'} secureTextEntry={true}/>
                        </View>
                    </View>
                    <PrimaryButton caption={'Log In'}/>
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
        justifyContent: 'space-between'

    },
    
    wrapper: {
        flex: .85,
        alignItems: 'center',

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
        width: '90%',
        marginBottom: 25
    },

    inputcontainer_last: {
        width: '90%',
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
    }

})