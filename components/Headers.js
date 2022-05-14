import { StyleSheet, View, Text, TouchableOpacity} from "react-native"
import { Ionicons } from '@expo/vector-icons'; 

export const PrimaryHeader = ({navigation}) => {
    return(
        <View style={css.header}>
            <TouchableOpacity style={css.headeback} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back-sharp" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={css.headertext}>Create Event</Text>
        </View>
    )
}

const css = StyleSheet.create({
    header: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flex: .1,
        marginBottom: 40,
        marginTop: 20
    },

    headertext: {
        fontSize: 28,
        color: '#fff',
        fontWeight: '700'
    },

    headeback: {
        borderColor: 'rgba(255,255,255, .1)',
        borderWidth: 2,
        paddingVertical: 6,
        paddingHorizontal: 7,
        borderRadius: 12,
        marginRight: 25

    },
})