import { SafeAreaView, View, StyleSheet, Text, ImageBackground} from "react-native"
import { OutlineButton, PrimaryButton } from "../buttons/Buttons"
import { LinearGradient } from 'expo-linear-gradient';


export const WelcomePage = ({navigation}) => {
    return(
        <View style={{flex: 1}}>
            <ImageBackground style={css.imageBg} resizeMode={'cover'} source={{uri: 'https://images.theconversation.com/files/427412/original/file-20211020-20-smslqk.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'}} />
            <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 1)']}
                style={css.gradient}
            />
            <SafeAreaView style={css.wrapper}>
                <View style={css.container}>
                    <Text style={css.maintext}>Make your day unforgettable</Text>
                    <PrimaryButton caption={'Log In'} action={() => navigation.navigate('Login')}/>
                    <OutlineButton caption={'Register'} action={() => navigation.navigate('Register')}/>
                </View>
            </SafeAreaView>
        </View>
    )
}


const css = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },

    maintext: {
        color: '#fff',
        fontSize: 32,
        maxWidth: 400,
        textAlign: 'center',
        marginBottom: 80,
        fontWeight: '700'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 50
    },

    imageBg: {
        flex: 1, 
    },

    gradient: {
        position: 'absolute',
        width: '100%',
        height: '80%',
        bottom: 0
    }

})