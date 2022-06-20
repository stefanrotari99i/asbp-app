import { View, Text, TouchableOpacity, StyleSheet} from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 


export const SettingsItemBtn =({btnColor, textColor, caption, action})=> {
    return(
        <TouchableOpacity style={{backgroundColor: btnColor, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 13, alignSelf: 'center', alignItems: 'center', borderRadius: 13, marginVertical: 10}} onPress={action}>
            <Text style={{color: textColor, fontSize: 16, fontWeight: '600'}}>{caption}</Text>
        </TouchableOpacity>
    )
}

export const SettingsItemBtnRegular = ({caption, icon, iconFamily}) => (
    <TouchableOpacity style={css.btnwrapper}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {iconFamily == 'Ionicons' ? <Ionicons name={icon} size={24} color="#fff" /> : <FontAwesome5 name={icon} size={24} color="#fff" />}
            <Text style={css.textbtn}>{caption}</Text>
        </View>
        <FontAwesome name="chevron-right" size={14} color="#397eef" style={{left: 2}}/>
    </TouchableOpacity>
)

const css = StyleSheet.create({

    btnwrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 13
    },

    textbtn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 15
    },

})
