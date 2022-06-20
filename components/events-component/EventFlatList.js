import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import React, { useState } from 'react'
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons'; 
import * as Haptics from 'expo-haptics';
import { FontAwesome } from '@expo/vector-icons';

let windowsWidth = Dimensions.get('window').width;

const DATA = [
    {
        id: 0,
        name: 'Socializare si betie, cu oameni de incredere',
        uri: 'https://picsum.photos/800/400',
        time: '16:45',
        people: '20'
    },

    {
        id: 1,
        name: 'Betie bradet',
        uri: 'https://picsum.photos/800/400',
        time: '20:00',
        people: '67'
    },

    {
        id: 3,
        name: 'Event 3',
        uri: 'https://picsum.photos/800/400',
        time: '01:30',
        people: '15'
    }
]


// Event Item
const Event = ({name, uri, time, people, eventid, lastitem, firstitem, navigation}) => {
    const [addto, setAddTo] = useState(false)

    return(
        <TouchableOpacity style={eventid == firstitem ? css.firstitem : eventid == lastitem ? css.lastitem : css.eventcontainer}
            onPress={() => navigation.push('EventScreenOpen')}>
            <Image source={{uri: uri}} style={css.eventimage} resizeMode={'cover'}/>
            <TouchableOpacity style={css.addto} onPress={() => setAddTo(!addto)}>
                {addto ? <Ionicons name="heart" size={22} color="crimson" /> : <Ionicons name="heart-outline" size={22} color="#fff" />}
            </TouchableOpacity>
            <View style={css.infowrapper}>
                <Text style={css.eventdate} numberOfLines={1}>20th November, 2022</Text>
                <Text style={css.name} numberOfLines={1}>{name}</Text>
                <View style={{alignItems: 'flex-start', justifyContent: 'space-between'}}>
                    <View style={css.infoicon}>
                        <Ionicons name="location-sharp" size={16} color="#fff" />
                        <Text style={css.infotext} numberOfLines={1}>Zona de agrement Bradet</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 13, alignItems: 'center', justifyContent: 'space-between', width: '100%',}}>
                        <View style={css.peoplegoing}>
                            <Image source={{uri: 'https://previews.123rf.com/images/dolgachov/dolgachov1307/dolgachov130701369/20772279-happy-student-girl-with-school-bag-and-notebooks-at-school.jpg'}} style={css.peoplegoingimgfirst} resizeMode={'cover'}/>
                            <Image source={{uri: 'https://images.unsplash.com/photo-1604177091072-b7b677a077f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwc3R1ZGVudHxlbnwwfHwwfHw%3D&w=1000&q=80'}} style={css.peoplegoingimg} resizeMode={'cover'}/>
                            <Image source={{uri: 'https://media.istockphoto.com/photos/african-student-sitting-in-classroom-picture-id1351445530?k=20&m=1351445530&s=612x612&w=0&h=VmJb2kB-kX-m9vg_Ei6HEcmvz0PvTMb7d-DM_bP79vg='}} style={css.peoplegoingimg} resizeMode={'cover'}/>
                            <Text style={css.goingcount}>150 going</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                        <TouchableOpacity 
                            style={css.addfriendbtn}
                            onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy) }>
                            <AntDesign name="star" size={20} color="#3a82f7" />
                            <Text style={{color: '#3a82f7', fontSize: 16, fontWeight: '600', marginLeft: 7}}>Interested</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={css.shareeventbtn}
                            onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy) }>
                            <FontAwesome name="share" size={20} color="#3a82f7" />
                        </TouchableOpacity>
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


export const EventFlatList = ({sectiontitle, showSectionHeader, navigation}) => {
    let firstitem = DATA[0].id
    let lastitem = DATA[DATA.length - 1].id
    const renderEvent = ({item}) => <Event navigation={navigation} name={item.name} uri={item.uri} time={item.time} people={item.people} eventid={item.id} firstitem={firstitem} lastitem={lastitem}/>;
    const keyExtractor = (item) => item.id;
    return(
        <View style={{marginBottom: 15}}>
            {showSectionHeader && 
            <View style={{flexDirection: 'row', width: '90%', alignSelf: 'center', alignItems: 'center', marginBottom: 18, marginTop: 5, justifyContent: 'space-between'}}>
                <Text style={css.sectiontitle}>{sectiontitle}</Text>
                <TouchableOpacity>
                    <Text style={css.viewall}>See all</Text>
                </TouchableOpacity>
            </View>}
            {DATA.length == 0 ? <EmptyList /> : 
                <FlatList
                snapToAlignment="start"
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("window").width}
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
        width:  windowsWidth * 0.9,
        marginHorizontal: windowsWidth * 0.05,
        backgroundColor: '#222226',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden'

    },

    firstitem: {
        width:  windowsWidth * 0.9,
        marginHorizontal: windowsWidth * 0.05,
        backgroundColor: '#222226',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden'
    },

    lastitem: {
        width:  windowsWidth * 0.9,
        marginHorizontal: windowsWidth * 0.05,
        backgroundColor: '#222226',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden'
    },

    eventimage: {
        width: '100%',
        height: 160,
    },

    infowrapper: {
        width: '100%',
        padding: 14,
    },

    name: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff'
    },

    btngoing: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btngoingtext: {
        color: '#222226',
        fontSize: 13,
        fontWeight: '600'

    },

    goingcount: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 13,
        fontWeight: '500',
        marginLeft: 10
    },

    // Prople going

    peoplegoing: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },

    peoplegoingall: {
        height: 30,
        width: 30,
        borderRadius: 15,
        marginLeft: -10,
        backgroundColor: '#000',
        borderColor: '#fff',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    peoplegoingimgfirst: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderColor: '#fff',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },

    peoplegoingimg: {
        height: 30,
        width: 30,
        borderRadius: 15,
        marginLeft: -10,
        borderColor: '#fff',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
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

    addto: {
        position: 'absolute',
        top: 18,
        right: 18,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 7,
        borderRadius: 10,
    },

    eventdate: {
        color: 'rgba(255,255,255, .95)',
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 6

    },

    // Add friend and share event buttons

    addfriendbtn: {
        backgroundColor: '#161617',
        width: '78%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical: 13, 
        alignSelf: 'center', 
        alignItems: 'center', 
        borderRadius: 10, 
        marginTop: 15
    },

    shareeventbtn: {
        backgroundColor: '#161617',
        width: '20%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical: 13, 
        alignSelf: 'center', 
        alignItems: 'center', 
        borderRadius: 10, 
        marginTop: 15
    },



})