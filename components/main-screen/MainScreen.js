import { SafeAreaView, StyleSheet, ScrollView } from "react-native"
import { EventFlatList } from "../events-component/EventFlatList"
import { EventFlatListVertical } from "../events-component/EventFlatListVertical"
import { InfoBlock } from "../main-screen-components/MainComponents"
import { Stories } from "../stories-component/Stories"
import { MainHeader } from "./MainHeader"
import React from 'react';
import { useScrollToTop } from '@react-navigation/native';

export const MainScreen = () => {

    const ref = React.useRef(null);
    useScrollToTop(ref);
    
    return(
        <SafeAreaView style={css.maincontainer}>
            <MainHeader />
            <ScrollView ref={ref}>
                <Stories />
                <InfoBlock />
                <EventFlatList sectiontitle={'Upcoming events'} showSectionHeader={true}/>
                <EventFlatListVertical sectiontitle={'Your events'} showSectionHeader={true}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const css = StyleSheet.create({

    maincontainer: {
        flex: 1,
        backgroundColor: '#121212'
    }
})