import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'; 



export const PorfileHeader = ({navigation}) => {
    return(
        <View style={css.header}>
            <Text style={css.username}>@stefanrotari</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Ionicons name="settings-outline" size={28} color="#fff" />
            </TouchableOpacity>
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

    username: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '700'
    }
})