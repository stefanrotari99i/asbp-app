import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput, Image} from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { useState } from 'react'
import { PrimaryButton } from "../buttons/Buttons";
import { PrimaryHeader } from "../Headers";

export const CreateEventScreen2 = ({navigation}) => {
    return(
        <SafeAreaView style={css.container}>
         <KeyboardAwareScrollView style={{flex: 1}}>
                <PrimaryHeader  navigation={navigation}/>
                <View style={{width: '90%', alignItems: 'center', alignSelf: 'center'}}>

                    {/* Section Title*/}
                    <Text style={css.sectiontitle}>Event details</Text>

                    {/* Event Name */}
                    <View style={css.inputwrapper}>
                        <TextInput style={css.input} placeholder='Event name' placeholderTextColor={'rgba(255,255,255, .5)'} keyboardAppearance={'dark'}/>
                    </View>

                    {/* Event Loaction */}
                    <View style={css.iconinput}>
                        <TextInput style={css.inputicon} placeholder='Location' placeholderTextColor={'rgba(255,255,255, .5)'} keyboardAppearance={'dark'}/>
                    </View>
                    {/* Event create button */}
                    <PrimaryButton caption={'Next step'} />
                </View>

            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const css = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#121212',
    },

    input: {
        width: '85%',
        height: '100%',
        color: '#fff',
        fontWeight: '500',
        fontSize: 15
    },

    inputicon: {
        width: '70%',
        height: '100%',
        color: '#fff',
        fontWeight: '500',
        fontSize: 15
    },

    inputwrapper: {
        backgroundColor: '#1a1a1a',
        borderColor: '#2e2e2e',
        borderWidth: 1,
        height: 58,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginBottom: 25
    },

    iconinput: {
        backgroundColor: '#1a1a1a',
        borderColor: '#2e2e2e',
        borderWidth: 1,
        height: 58,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        zIndex: 2
    },

    inputwrapper_half: {
        backgroundColor: '#1a1a1a',
        borderColor: '#2e2e2e',
        borderWidth: 1,
        height: 58,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '47%',
        marginBottom: 25,
        justifyContent: 'space-between'
    },

    sectiontitle: {
        fontSize: 22,
        color: '#fff',
        fontWeight: '600',
        alignSelf: 'flex-start',
        marginBottom: 20
    },

})