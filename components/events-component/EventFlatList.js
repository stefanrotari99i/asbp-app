import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import React, { useState } from 'react'



const DATA = [
    {
        id: 0,
        name: 'Socializare',
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
            <LinearGradient
                    colors={['transparent', '#000']}
                    style={css.gradient}
                />
            <View style={css.datewrapper}>
                <Text style={css.date}>26</Text>
                <Text numberOfLines={1} style={css.month}>May</Text>
            </View>
            {/* <TouchableOpacity style={css.addto} onPress={() => setAddTo(!addto)}>
                <MaterialIcons name= {addto ?"library-add" : "library-add-check"} size={26} color="#fff" />
            </TouchableOpacity> */}
            <View style={css.infowrapper}>
                <Text style={css.name}>{name}</Text>
                <View style={{alignItems: 'flex-start'}}>
                    <View style={css.infoicon}>
                        <Ionicons name="location-sharp" size={16} color="#fff" />
                        <Text style={css.infotext}>Zona de agrement Bradet</Text>
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
        <Text style={{color: '#fff', fontWeight: '600'}}>Something went wrong please try again.</Text>
    </View>
)


export const EventFlatList = ({sectiontitle, showSectionHeader}) => {
    const renderEvent = ({item}) => <Event name={item.name} uri={item.uri} time={item.time} people={item.people}/>;
    const keyExtractor = (item) => item.id;
    return(
        <View >
            {showSectionHeader && 
            <View style={{flexDirection: 'row', width: '90%', alignSelf: 'center', alignItems: 'center', marginVertical: 18, justifyContent: 'space-between'}}>
                <Text style={css.sectiontitle}>{sectiontitle}</Text>
                <TouchableOpacity>
                    <Text style={css.viewall}>See all</Text>
                </TouchableOpacity>
            </View>}

            {DATA.length == 0 ? <EmptyList /> : 
                <FlatList
                horizontal
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
        height: 200,
        width:  300,
        marginRight: 30,
        marginLeft: 15

    },

    eventimage: {
        height: "100%",
        borderRadius: 15
    },

    infowrapper: {
        position: 'absolute' ,
        bottom: 20,
        left: 15
    },

    name: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff'
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
        marginRight: 20
    },

    infotext: {
        color: 'rgba(255,255,255, .8)',
        fontSize: 13,
        marginLeft: 5
    },

    eventdatewrapper: {
        position: 'absolute',
        top: 15,
        backgroundColor: 'rgba(255, 195, 0, .8)',
        padding: 10,
        borderRadius: 6,
        right: 15
    },

    date: {
        color: '#000',
        fontWeight: '800',
        fontSize: 12
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

    addto: {
        position: 'absolute',
        top: 18,
        right: 18,
    },

    datewrapper: {
        alignItems: 'center',
        position: 'absolute',
        right: 15,
        top: 15
    },

    date: {
        fontSize: 28,
        color: '#fff',
        fontWeight: '700'
    },

    month: {
        color: '#fff',
        fontSize: 16,
        marginTop: -8
    }
})