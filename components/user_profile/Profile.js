import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native"
import { PorfileHeader } from "./ProfileHeader"
import { ProfileMain } from "./ProfileMain"
import {EventFlatListVertical} from '../events-component/EventFlatListVertical'
import { useScrollToTop } from '@react-navigation/native';
import React from 'react'


export const Profile = () => {
    const ref = React.useRef(null);
    useScrollToTop(ref);

    return(
        <SafeAreaView style={css.container}>
            <PorfileHeader />
            <ScrollView ref={ref}>
                <ProfileMain />
                <EventFlatListVertical showSectionHeader={false}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1
    }
})