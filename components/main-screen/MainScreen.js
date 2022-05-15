import { SafeAreaView, StyleSheet, ScrollView } from "react-native"
import { EventFlatList } from "../events-component/EventFlatList"
import { EventFlatListVertical } from "../events-component/EventFlatListVertical"
import { InfoBlock } from "../main-screen-components/MainComponents"
import { Stories } from "../stories-component/Stories"
import { MainHeader } from "./MainHeader"
import React from 'react';


export const MainScreen = () => {
    return(
        <SafeAreaView style={css.maincontainer}>
            <MainHeader />
            <ScrollView>
                <Stories />
                <InfoBlock />
                <EventFlatList sectiontitle={'Upcoming events'}/>
                <EventFlatListVertical sectiontitle={'Your events'}/>
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