import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'; 



export const MainHeader = () => {
    return(
        <View style={css.header}>
            <Text style={css.logo}>DrinkMate</Text>
            <View style={css.headerwrapp}>
                <TouchableOpacity style={css.notification}>
                    <Ionicons name="notifications" size={26} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="md-chatbubble-ellipses" size={26} color="#fff" />
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
        marginVertical: 15
    },

    logo: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700'
    },

    headerwrapp: {
        flexDirection: 'row'
    },

    notification: {
        marginRight: 22
    }
})