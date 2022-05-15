import { TouchableOpacity, View, StyleSheet, Text, ImageBackground} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import { DetailsBtn } from "../buttons/Buttons"


export const InfoBlock = () => {
    return(
        <View style={css.infowrapp}>
            <ImageBackground source={{uri: 'https://www.pngmart.com/files/21/Crowd-Silhoutte-PNG-Isolated-Free-Download.png'}} style={css.bgimage} resizeMode={'cover'}/>
            <Text style={css.infotitle}>Find new friends and drinkmates!</Text>
            <Text style={css.content}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </Text>
            <DetailsBtn caption={'Create event'}/>
        </View>
    )
}

const css = StyleSheet.create({
    infowrapp: {
        backgroundColor: '#8758f2',
        width: '90%',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 15,
        alignItems: 'flex-start',
        overflow:'hidden',
        marginVertical: 12
    },

    infotitle: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20
    },

    content: {
        color: 'rgba(255,255,255, .8)',
        fontWeight: '500',
        fontSize: 14,
        marginTop: 5,
        marginBottom: 15
    },

    bgimage: {
        width: '120%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        opacity: .7
    }
})