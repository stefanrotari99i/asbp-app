import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native"
import { PorfileHeader } from "./ProfileHeader"
import { ProfileMain } from "./ProfileMain"
import {EventFlatListVertical} from '../events-component/EventFlatListVertical'
import { useScrollToTop } from '@react-navigation/native';
import React from 'react'
import { DATA } from "../DataTest/DATA";


export const Profile = ({navigation}) => {
    const ref = React.useRef(null);
    useScrollToTop(ref);

    return(
        <SafeAreaView style={css.container}>
            <PorfileHeader navigation={navigation}/>
            <ScrollView ref={ref}>
                <ProfileMain />
                <EventFlatListVertical showSectionHeader={false} DATA={DATA}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1
    }
})