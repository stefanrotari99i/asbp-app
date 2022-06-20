import { View, StyleSheet, TextInput, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React from 'react';
import { FlatList } from "react-native-gesture-handler";


export const SearchBar = () => {
    return (
        // serach bar component
        <View style={styles.container}>
            <View style={styles.searchbar}>
                <MaterialCommunityIcons name="magnify" size={22} color="rgba(255,255,255, .5)" style={styles.searchicon}/>
                <TextInput keyboardAppearance="dark" style={styles.searchbarinput} placeholder="Search"  placeholderTextColor={'rgba(255,255,255, .5)'}/>
            </View>
        </View>

    
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },

    searchbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingVertical: 10,
        alignSelf: 'center',
    },

    searchbarinput: {
        width: '100%',
        height: 42,
        borderRadius: 10,
        backgroundColor: '#222226',
        paddingHorizontal: 10,
        paddingLeft: 35,
        fontSize: 15,
        color: '#ffffff',
        fontWeight: '500',
        borderWidth: 1,
        borderColor: '#000',
    },

    searchicon: {
        position: 'absolute',
        left: 10,
        top: '50%',
        zIndex: 1,
    },

        
});