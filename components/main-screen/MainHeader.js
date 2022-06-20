import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'; 



export const MainHeader = () => {
    return(
        <View style={css.header}>
            {/* <Text style={css.logo}>DrinkMate</Text> */}
            <TouchableOpacity style={css.changelocation}>
                <Ionicons name="ios-location-sharp" size={20} color="#fff" />
                <Text style={css.location}>Petroșani</Text>
            </TouchableOpacity>
            <View style={css.headerwrapp}>
                <TouchableOpacity style={css.notification}>
                    <Ionicons name="notifications" size={26} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    header: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },

    logo: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700'
    },

    headerwrapp: {
        flexDirection: 'row'
    },

    location: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 7
    },

    changelocation: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})