import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { Ionicons } from '@expo/vector-icons'; 


export const ProfileMain = () => {
    return(
        <View style={css.mainwrapper}>
            <TouchableOpacity>
                <Image style={css.avatar} source={{uri: 'https://image.gala.de/20548298/t/r4/v20/w1440/r1/-/dwayne-johnson-cm--8524760-.jpg'}} />
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
        width: '100%',
        paddingHorizontal: 35,
        marginTop: 30
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
    }
})