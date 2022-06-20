import { ScrollView, View, StyleSheet, Text, ImageBackground, Dimensions,TouchableOpacity, Image } from "react-native"
let { width, height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import * as Haptics from 'expo-haptics';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { EventDrinkList } from "./EventDrinkList";


export const EventScreenOpen = ({navigation}) => {

    return(
        <View style={style.container}>
            <ScrollView
                style={style.wrapper}
                showsVerticalScrollIndicator={false}
            >
                <View style={style.headerbar}>
                    <TouchableOpacity style={style.headerback} onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back-sharp" size={22} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.headerback}>
                            <Entypo name="dots-three-vertical" size={22} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={style.header}>
                    <ImageBackground style={style.bgimage} source={{uri: 'https://picsum.photos/800/400'}} />
                </View>
                <View>
                    <Text style={style.title}>Socializare si betie, cu oameni de incredere </Text>
                    <TouchableOpacity style={style.user}>
                        <Text style={{color: 'rgba(255,255,255, .7)', fontSize: 12, marginRight: 7, fontWeight: '600'}}>Created by: </Text>
                        <Image style={style.avatar} source={{uri: 'https://picsum.photos/200/200'}} />
                        <Text style={style.username}>Ștefan Rotari</Text>
                    </TouchableOpacity>
                    <View style={style.infowrapper}>
                        <View style={style.infoicon}>
                            <Text style={style.maintext}>FREE</Text>
                            <Text numberOfLines={1} style={style.secondtext}>Entrance</Text>
                        </View>
                        <View style={style.separator}>
                        </View>
                        <View style={style.infoicon} >
                            <Text style={style.maintext}>26 May</Text>
                            <Text numberOfLines={1} style={style.secondtext}>Date</Text>
                        </View>
                        <View style={style.separator}>
                        </View>
                        <View style={style.infoicon}>
                            <Text style={style.maintext}>22:45</Text>
                            <Text numberOfLines={1} style={style.secondtext}>Time</Text>
                        </View>
                    </View>
                    <View style={{width: '90%', alignSelf: 'center', marginTop: 15}}>
                        <TouchableOpacity 
                            style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                            <FontAwesome5 name="location-arrow" size={15} color="rgba(255,255,255, .5)" />
                            <Text style={style.location}>Strada Universităţii 20, Petrosani, ROMANIA, 332006</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                                style={style.getlocation}
                                onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy) }>
                                <Ionicons name="locate-sharp" size={20} color="#3a82f7" />
                                <Text style={{color: '#3a82f7', fontSize: 16, fontWeight: '600', marginLeft: 7}}>Get directions</Text>
                        </TouchableOpacity>
                    </View>
                    <EventDrinkList  navigation={navigation}/>
                    <View style={{paddingBottom: 85}}>
                        <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16, width: '90%', alignSelf: 'center', marginBottom: 5, marginTop: 12}}>Event description</Text>

                        <Text style={style.description}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <LinearGradient style={style.footer}
                colors={['transparent','rgba(0,0,0,.8)' , 'rgba(0,0,0,1)']}
            >
                <View style={style.peoplegoing}>
                            <Image source={{uri: 'https://i.pravatar.cc/300'}} style={style.peoplegoingimgfirst} resizeMode={'cover'}/>
                            <Image source={{uri: 'https://i.pravatar.cc/300'}} style={style.peoplegoingimg} resizeMode={'cover'}/>
                            <Image source={{uri: 'https://i.pravatar.cc/300'}} style={style.peoplegoingimg} resizeMode={'cover'}/>
                            <View style={style.peoplegoinglast}>
                                <Text style={{color: '#fff', fontSize: 8, fontWeight: '700'}}>+147</Text>
                            </View>
                            <Text style={style.goingcount}>150 going</Text>
                </View>
                <TouchableOpacity 
                            style={style.addfriendbtn}
                            onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy) }>
                            <AntDesign name="star" size={20} color="#000" />
                            <Text style={{color: '#000', fontSize: 16, fontWeight: '600', marginLeft: 7}}>Interested</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    
    wrapper: {
        flex: 1,
        marginBottom: 20,
    },
    bgimage: {
        width: '100%',
        height: height / 2.5,
    },

    headerbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '92%',
        left: '4%',
        padding: 10,
        position: 'absolute',
        zIndex: 1,
        top: 15,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10,
        marginHorizontal: '4%',
    },

    infowrapper: {
        width: '88%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 10,
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
        backgroundColor: 'rgba(255,255,255, .2)',
        borderRadius: 20,
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

    description: {
        fontSize: 15,
        color: '#8f8f91',
        marginHorizontal: '5%',
        marginTop: 5,
        lineHeight: 20,

    },

    footer: {
        width: '100%',
        paddingHorizontal: '4%',
        height: 120,
        position: 'absolute',
        bottom: 0,
        paddingBottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },

    button: {
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttontext: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000',
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
        marginLeft: -14,
        borderColor: '#fff',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },

    peoplegoinglast: {
        height: 30,
        width: 30,
        borderRadius: 15,
        marginLeft: -14,
        borderColor: '#fff',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },

    addfriendbtn: {
        backgroundColor: '#fff', 
        paddingVertical: 11,
        paddingHorizontal: 20,
        alignItems: 'center', 
        borderRadius: 10, 
        flexDirection: 'row',
    },


    avatar: {
        height: 20,
        width: 20,
        borderRadius: 25,

    },

    username: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 13,
        fontWeight: '500',
        marginLeft: 7,
    },

    user: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
        width: '92%',
        alignSelf: 'center',
    },

    getlocation: {
        backgroundColor: '#161617',
        width: '100%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical: 13, 
        alignSelf: 'center', 
        alignItems: 'center', 
        borderRadius: 10, 
        marginVertical: 12
    },

    location: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 12,
        fontWeight: '500',
        marginLeft: 7,
        
    },

    headerback: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 50,
        padding: 7,
    },

})