import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import React, { useState } from 'react'



const DATA = [
    {
        id: 0,
        name: 'a q w e r t y u i o p a s w f r t y u  i',
        uri: 'https://internationaljournalofresearch.files.wordpress.com/2019/11/www.usnews.com_.jpg',
        time: '16:45',
        people: '20'
    },

    {
        id: 1,
        name: 'Betie bradet',
        uri: 'https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        time: '20:00',
        people: '67'
    },

    {
        id: 3,
        name: 'Event 3',
        uri: 'https://apollo-aachen.de/wp-content/uploads/2019/08/party-1170x550.jpg',
        time: '01:30',
        people: '15'
    }
]


// Event Item
const Event = ({name, uri, time, people}) => {
    const [addto, setAddTo] = useState(true)

    return(
        <TouchableOpacity style={css.eventcontainer}>
            <Image source={{uri: uri}} style={css.eventimage} resizeMode={'cover'}/>
            <View style={css.infowrapper}>
                <View style={css.datewrapper}>
                    <Text style={css.date}>26</Text>
                    <Text numberOfLines={1} style={css.month}>May</Text>
                </View>
                <Text numberOfLines={1} style={css.name}>{name}</Text>
                <View style={{alignItems: 'flex-start'}}>
                    <View style={css.infoicon}>
                        <Ionicons name="location-sharp" size={16} color="#fff" />
                        <Text numberOfLines={2} style={css.infotext}>Zona de agrement Bradet</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}>
                        <View style={css.infoicon}>
                            <Octicons name="clock" size={15} color="#fff" />
                            <Text style={css.infotext}>{time}</Text>
                        </View>
                        <View style={css.infoicon}>
                            <Ionicons name="ios-people" size={16} color="#fff" />
                            <Text style={css.infotext}>{people}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
)}

const EmptyList = () => (
    <View style={{alignItems: 'center'}}>
        <Text style={{color: '#fff', fontWeight: '600'}}>You dont have events.</Text>
    </View>
)

export const EventFlatListVertical = ({sectiontitle, showSectionHeader}) => {
    const renderEvent = ({item}) => <Event name={item.name} uri={item.uri} time={item.time} people={item.people}/>;
    const keyExtractor = (item) => item.id;
    return(
        <View style={{marginBottom: 30}}>
            {showSectionHeader && 
            <View style={{flexDirection: 'row', width: '90%', alignSelf: 'center', alignItems: 'center', marginVertical: 18, justifyContent: 'space-between'}}>
                <Text style={css.sectiontitle}>{sectiontitle}</Text>
                <TouchableOpacity>
                    <Text style={css.viewall}>See all</Text>
                </TouchableOpacity>
            </View>}
            {DATA.length == 0 ? <EmptyList /> : 
                <FlatList
                data={DATA}
                renderItem={renderEvent}
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
            />}
      </View>
    )
}

const css = StyleSheet.create({
    eventcontainer: {
        height: 120,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20

    },

    eventimage: {
        height: "100%",
        width: '35%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },

    infowrapper: {
        backgroundColor: '#1f1f1f',
        width: '65%',
        height: '100%',
        padding: 12,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10

    },


    name: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
        maxWidth: 160
    },

    gradient: {
        width: '100%',
        position: 'absolute',
        height: '100%',
        bottom: 0,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14
    },

    infoicon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginRight: 20,
    },

    infotext: {
        color: 'rgba(255,255,255, .8)',
        fontSize: 13,
        marginLeft: 5,
        maxWidth: 140
    },


    sectiontitle: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '700',
        alignSelf: 'center',
    },

    viewall: {
        color: 'rgba(255,255,255, .5)',
        fontSize: 14 ,
        fontWeight: '600',
    },

    datewrapper: {
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top: 10
    },

    date: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '700'
    },

    month: {
        color: '#fff'
    }
})