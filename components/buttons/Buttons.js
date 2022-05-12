import { TouchableOpacity, StyleSheet, Text } from "react-native"


export const PrimaryButton = ({caption, action}) => {
    return(
        <TouchableOpacity style={css.primarybtn} onPress={action} >
            <Text style={css.btntext}>{caption}</Text>
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

const css = StyleSheet.create({
    primarybtn: {
        backgroundColor: '#feb241',
        width: '90%',
        paddingVertical: 17,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 18
    },

    btntext: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },

    outlinebtn: {
        borderWidth: 1,
        borderColor: '#FFF',
        width: '90%',
        paddingVertical: 17,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 18
    },

    btntext_2: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600'
    }

})