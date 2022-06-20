import { SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Text, View} from "react-native"
import { MainHeader } from "./MainHeader"
import React, {useEffect} from 'react';
import { useScrollToTop, CommonActions  } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword ,onAuthStateChanged,signOut} from "firebase/auth";
import { db, auth} from "../firebase_api/config";
import { collection, addDoc,setDoc, doc,Timestamp } from "firebase/firestore"; 
import { MainContent } from "./MainScreenContent"



export const MainScreen = ({navigation}) => {
    const ref = React.useRef(null);

    useScrollToTop(ref);
    return(
        <View style={css.maincontainer}>
            <SafeAreaView>
                <MainHeader />
            </SafeAreaView>
            <MainContent scrollRef={ref} navigation={navigation}/>
        </View>
    )


}

const css = StyleSheet.create({

    maincontainer: {
        flex: 1,
        backgroundColor: '#000'
    }
})