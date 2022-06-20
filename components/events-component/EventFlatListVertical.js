import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity, Animated, Dimensions} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import React, { useState } from 'react'
import { BlurView } from 'expo-blur';
import { Entypo } from '@expo/vector-icons'; 
import Swipeable from 'react-native-gesture-handler/Swipeable';




// Event Item
const Event = ({name, uri, time, people}) => {
    const [addto, setAddTo] = useState(true)
    const [addFavorite, setAddFavorite] = useState(false)
    const renderRightActions = (progress, dragX) => {
        const translateX = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
        });
    
        return (
            <View style={css.rightaction}>
                <TouchableOpacity style={css.action}>
                    <Entypo name="trash" size={24} color='rgba(255,255,255, .8)' />
                </TouchableOpacity>
                <Animated.View style={[css.action, {transform: [{translateX}]}]}>
                    <Entypo name="circle-with-cross" size={24} color='rgba(255,255,255, .8)' />
                </Animated.View>
            </View>
        );
    };
    return(
        <Swipeable renderRightActions={renderRightActions}>
            <View style={css.eventcontainer}>
                <View style={css.eventsettings}>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={22} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={css.settingicon} onPress={()=>setAddFavorite(!addFavorite)}>
                        {addFavorite ?<Ionicons name="heart" size={22} color="crimson" /> : <Ionicons name="heart-outline" size={22} color="#fff" />}
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{flexDirection: 'row', width: '100%'}}>
                    <Image source={{uri: uri}} style={css.eventimage} resizeMode={'cover'} />
                    <View style={css.eventinfo}>
                        <Text style={css.eventcategory}>Party</Text>
                        <Text numberOfLines={1} style={css.name}>{name}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Octicons name="location" size={15} color="rgba(255,255,255, .8)" style={{marginRight: 6}}/>
                            <Text numberOfLines={2} style={css.infotext}>Bradet</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={css.infowrapper}>
                    <View style={css.infoicon}>
                        <Text style={css.maintext}>{people}</Text>
                        <Text numberOfLines={1} style={css.secondtext}>Guests</Text>
                    </View>
                    <View style={css.separator}>
                    </View>
                    <View style={css.infoicon} >
                        <Text style={css.maintext}>26 May</Text>
                        <Text numberOfLines={1} style={css.secondtext}>Date</Text>
                    </View>
                    <View style={css.separator}>
                    </View>
                    <View style={css.infoicon}>
                        <Text style={css.maintext}>{time}</Text>
                        <Text numberOfLines={1} style={css.secondtext}>Time</Text>
                    </View>
                </View>
            </View>
        </Swipeable>
)}

const EmptyList = () => (
    <View style={{alignItems: 'center'}}>
        <Text style={{color: '#fff', fontWeight: '600'}}>You dont have events.</Text>
    </View>
)

export const EventFlatListVertical = ({sectiontitle, showSectionHeader, DATA, category, categoryShown}) => {
    const renderEvent = ({item}) => <Event name={item.name} uri={item.uri} time={item.time} people={item.people}/>;
    const keyExtractor = (item) => item.id;
    return(
        <View style={{marginTop: showSectionHeader ? 15 : 0, marginBottom: 15}}>
            {showSectionHeader && 
            <View style={{flexDirection: 'row', width: '90%', alignSelf: 'center', alignItems: 'center', marginBottom: categoryShown ? 0 : 20, justifyContent: 'space-between'}}>
                <Text style={css.sectiontitle}>{sectiontitle}</Text>
                <TouchableOpacity>
                    <Text style={css.viewall}>See all</Text>
                </TouchableOpacity>
            </View>}
            {categoryShown && 
            <View style={{flexDirection: 'row', width: '90%', alignSelf: 'center', marginVertical: 13}}>
                <Text style={css.smalltitle}>{category}</Text>
            </View>}
            {DATA.length == 0 ? <EmptyList /> : 
                <FlatList
                data={DATA}
                renderItem={renderEvent}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            />}
      </View>
    )
}

const css = StyleSheet.create({
    eventcontainer: {
        width: '90%',
        height: 180,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderRadius: 15,
        padding: 15,
        backgroundColor: '#222226',

    },

    rightaction: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 10,
    },

    action: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 10,
    },

    eventcategory: {
        color: '#d6fd51',
        fontWeight: '600',
        textTransform: 'uppercase',
        fontSize: 12,
        marginBottom: 6
    },

    eventimage: {
        height: 75,
        width: 75,
        borderRadius: 7,
    },

    eventinfo: {
        marginLeft: 15
    },

    infowrapper: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 10
    },

    eventsettings: {
        backgroundColor: '#161617',
        position: 'absolute',
        padding: 10,
        borderRadius: 10,
        right: 15,
        top: 15,
        zIndex: 2,
    },

    name: {
        fontSize: 17,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 6
    },

    gradient: {
        width: '100%',
        position: 'absolute',
        height: '100%',
        bottom: 0,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
    },

    infoicon: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 5,
    },

    infotext: {
        color: 'rgba(255,255,255, .8)',
        fontSize: 13,

    },

    settingicon: {
        marginTop: 10,
    },


    sectiontitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '700',
        alignSelf: 'center',
    },

    viewall: {
        fontSize: 13,
        color: '#3a82f7',
        fontWeight: '600'
    },


    maintext: {
        fontSize: 17,
        color: '#fff',
        fontWeight: '600',
        zIndex: 2,
    },

    secondtext: {
        color: 'rgba(255,255,255, .6)',
        fontSize: 13,
        marginTop: 4,
        fontWeight: '400',
        zIndex: 2,
    },

    smalltitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#8f8f91'
    },

    separator: {
        width: 1,
        height: '100%',
        backgroundColor: 'rgba(255,255,255, .05)',
        borderRadius: 20,
    }
})