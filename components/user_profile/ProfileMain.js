import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { Ionicons } from '@expo/vector-icons'; 
import { OutlineButton } from "../buttons/Buttons";
import { SettingsItemBtn } from "../settings_screen/SettingsItemsBtns";
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

export const ProfileMain = () => {
    return(
        <View style={css.mainwrapper}>
            <TouchableOpacity style={css.avatarwrapp}>
                <Image style={css.avatar} source={{uri: 'https://image.gala.de/20548298/t/r4/v20/w1440/r1/-/dwayne-johnson-cm--8524760-.jpg'}} />
                <TouchableOpacity style={css.mystoryadd}>
                    <Entypo name="plus" size={20} color="#fff" />
                </TouchableOpacity>
            </TouchableOpacity>
            <Text style={css.name} >Dwayne Johnson</Text>
            <Text style={css.username}>@dwaynjohnson</Text>
            <View style={css.statscontainer}>
                <View style={css.statswrapper}>
                    <Text style={css.statcount}>25</Text>
                    <Text style={css.stattext}>Events</Text>
                </View>
                <View style={css.statswrapper}>
                    <Text style={css.statcount}>125</Text>
                    <Text style={css.stattext}>Followers</Text>
                </View>
                <View style={css.statswrapper}>
                    <Text style={css.statcount}>565</Text>
                    <Text style={css.stattext}>Following</Text>
                </View>
            </View>
            <View style={{width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',  marginVertical: 10}}>
                <TouchableOpacity style={{backgroundColor: '#182230', width: '83%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 13, alignSelf: 'center', alignItems: 'center', borderRadius: 10}}>
                    <Text style={{color: '#3a82f7', fontSize: 16, fontWeight: '600'}}>Edit profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: '#182230', width: '15%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 13, alignSelf: 'center', alignItems: 'center', borderRadius: 10}}>
                    <Entypo name="plus" size={22} color="#3a82f7" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    mainwrapper: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: 25
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50
    },

    avatarwrapp: {
        backgroundColor: '#182230',
        borderRadius: 50,
        padding: 4
    },

    name: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10
    },

    username: {
        color: 'rgba(255,255,255, .6)',
        fontSize: 14,
        fontWeight: '400',
        marginTop: 5
    },

    // Stats

    statscontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#161617',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 13,
        width: '100%',
        marginTop: 10
    },
    
    statswrapper: {
        alignItems: 'center'
    },


    statcount: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700'
    },

    stattext: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '400'
    },

    mystoryadd: {
        backgroundColor: '#182230',
        borderRadius: 50,
        position: 'absolute',
        padding: 5,
        bottom: 0,
        right: 0
    }
})