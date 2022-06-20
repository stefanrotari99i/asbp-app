import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'; 



export const PorfileHeader = () => {
    return(
        <View style={css.header}>
            <Text style={css.username}>@stefanrotari</Text>
            <TouchableOpacity>
                <Ionicons name="settings-outline" size={24} color="#fff" />
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
        fontSize: 20,
        color: '#fff',
        fontWeight: '700'
    }
})