import { SafeAreaView, TextInput, View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {PrimaryButton} from '../buttons/Buttons'
import { Ionicons } from '@expo/vector-icons'; 


export const RegisterPage = ({navigation}) => {
    return(
        <SafeAreaView style={css.container}>
            <View style={css.header}>
                <TouchableOpacity style={css.headeback} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-sharp" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={css.headertext}>Sign Up</Text>
            </View>
            <View style={css.wrapper}>
                <View style={css.inputcontainer}>
                    <Text style={css.inputtext}>Name</Text>
                    <View style={css.inputwrapper}>
                        <TextInput style={css.input} placeholder='John Doe' placeholderTextColor={'rgba(255,255,255, .5)'}/>
                    </View>
                </View>
                <View style={css.inputcontainer}>
                    <Text style={css.inputtext}>Email</Text>
                    <View style={css.inputwrapper}>
                        <TextInput style={css.input} placeholder='mail@example.com' placeholderTextColor={'rgba(255,255,255, .5)'}/>
                    </View>
                </View>
                <View style={css.inputcontainer_last}>
                    <Text style={css.inputtext}>Password</Text>
                    <View style={css.inputwrapper}>
                        <TextInput style={css.input} placeholder='Pick a strong password' placeholderTextColor={'rgba(255,255,255, .5)'}/>
                    </View>
                </View>
                <View style={css.inputcontainer_last}>
                    <Text style={css.inputtext}>Password again</Text>
                    <View style={css.inputwrapper}>
                        <TextInput style={css.input} placeholder='Repeat password' placeholderTextColor={'rgba(255,255,255, .5)'}/>
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

    },

    header: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flex: .1
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
        marginTop: 10,
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