import { TouchableOpacity, StyleSheet, Text } from "react-native"
import { AntDesign } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

export const PrimaryButton = ({caption, action}) => {
    return(
        <TouchableOpacity style={css.primarybtn} onPress={action} >
            <LinearGradient
                colors={['#FFC300', '#FEB241']}
                style={css.gradient}
            >
                <Text style={css.btntext}>{caption}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export const OutlineButton = ({caption, action}) => {
    return(
        <TouchableOpacity style={css.outlinebtn} onPress={action} >
            <Text style={css.btntext_2}>{caption}</Text>
        </TouchableOpacity> 
    )
}

export const AppleButton = ({caption, action}) => {
    return(
        <TouchableOpacity style={css.socialbtn} onPress={action} >
            <AntDesign name="apple1" size={24} color="#fff" style={css.socialicon}/>
            <Text style={css.btntext_2}>{caption}</Text>
        </TouchableOpacity> 
    )
}

export const GoogleButton = ({caption, action}) => {
    return(
        <TouchableOpacity style={css.socialbtn} onPress={action} >
            <AntDesign name="google" size={24} color="#dd4b39" style={css.socialicon}/>
            <Text style={css.btntext_2}>{caption}</Text>
        </TouchableOpacity> 
    )
}

export const DetailsBtn = ({caption, action}) => (
    <TouchableOpacity style={css.detailsbtn} onPress={action} >
        <Text style={css.detailsbtntext}>{caption}</Text>
    </TouchableOpacity> 
)

const css = StyleSheet.create({
    primarybtn: {
        width: '100%',
        marginBottom: 20
    },

    gradient: {
        paddingVertical: 17,
        borderRadius: 10,
        alignItems: 'center', 
    },

    btntext: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },

    outlinebtn: {
        borderWidth: 1,
        borderColor: '#FFF',
        width: '100%',
        paddingVertical: 17,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10
    },

    socialbtn: {
        borderWidth: .2,
        borderColor: 'rgba(255,255,255, .2)',
        width: '100%',
        paddingVertical: 17,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 18,

    },

    socialicon: {
        position: 'absolute',
        left: 20,
        top: '75%'
    },

    btntext_2: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600'
    },

    detailsbtn: {
        backgroundColor: '#fff',
        paddingVertical: 9,
        paddingHorizontal: 15,
        borderRadius: 8
    }

})