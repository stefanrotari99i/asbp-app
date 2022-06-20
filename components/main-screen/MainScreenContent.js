import { SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Text, View, RefreshControl} from "react-native"
import { EventFlatList } from "../events-component/EventFlatList"
import { EventFlatListVertical } from "../events-component/EventFlatListVertical"
import { InfoBlock } from "../main-screen-components/MainComponents"
import { Stories } from "../stories-component/Stories"
import { MainHeader } from "./MainHeader"
import React, {useEffect} from 'react';
import { useScrollToTop, CommonActions  } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword ,onAuthStateChanged,signOut} from "firebase/auth";
import { db, auth} from "../firebase_api/config";
import { collection, addDoc,setDoc, doc,Timestamp } from "firebase/firestore"; 
import { DATA, DATA_active } from "../DataTest/DATA"
import { SuggestedContact } from "./SuggestedContacts"


export class MainContent extends React.Component {
    render() {
        return(
            <ScrollView 
                ref={this.props.scrollRef}
            >
                <Stories navigation={this.props.navigation}/>
                <EventFlatList sectiontitle={'Upcoming events'} showSectionHeader={true} navigation={this.props.navigation}/>
                <SuggestedContact />
                <InfoBlock />
                <EventFlatListVertical sectiontitle={'Your events'} showSectionHeader={true} DATA={DATA_active} categoryShown category={'Active'}/>
                <EventFlatListVertical sectiontitle={'Your events'} showSectionHeader={false} DATA={DATA} categoryShown category={'Ended'}/>
            </ScrollView>
        )
    }
}