import { TouchableOpacity, View, StyleSheet, Text, ImageBackground} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import { DetailsBtn } from "../buttons/Buttons"
import { BlurView } from 'expo-blur';

export const InfoBlock = () => {
    return(
        <View style={css.infowrapp}>
            <ImageBackground source={{uri: 'https://pngimg.com/uploads/party/party_PNG17.png'}} style={css.bgimage} resizeMode={'cover'}/>
            <Text style={css.infotitle}>Find new friends and drinkmate's!</Text>
            <Text style={css.content}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </Text>
            <DetailsBtn caption={'Create event'}/>
        </View>
    )
}

const css = StyleSheet.create({
    infowrapp: {
        backgroundColor: '#222226',
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 20,
        paddingHorizontal: 17,
        borderRadius: 15,
        alignItems: 'flex-start',
        overflow:'hidden',
        marginVertical: 15
    },

    infotitle: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20
    },

    content: {
        color: 'rgba(255,255,255, .8)',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 10,
        marginBottom: 15
    },

    bgimage: {
        width: '120%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        opacity: .6
    },

})