import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,} from "react-native"
import { Ionicons } from '@expo/vector-icons'; 
import { PrimaryHeader } from "../Headers";
import { getAuth, signInWithEmailAndPassword ,onAuthStateChanged,signOut} from "firebase/auth";
import { db, auth} from "../firebase_api/config";
import { SettingsItemBtn, SettingsItemBtnRegular } from "./SettingsItemsBtns";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 


function logout_callback({navigation}){
    signOut(auth).then(() => {
        navigation.navigate("Welcome");
      }).catch((error) => {
 
      });
}


export const AccountSettings = ({navigation}) => {
    return(
        <SafeAreaView style={css.container}>
            <PrimaryHeader caption={'Settings'} navigation={navigation}/>
            <View style={css.wrapper}>
                <View style={css.setingswrapper}>
                    <SettingsItemBtnRegular caption={'Account'} icon={'user-circle'} iconFamily={'fa5'}/>
                    <SettingsItemBtnRegular caption={'Notification'} icon={'notifications-outline'} iconFamily={'Ionicons'}/>
                    <SettingsItemBtnRegular caption={'Privacy'} icon={'lock-closed-outline'} iconFamily={'Ionicons'}/>
                    <SettingsItemBtnRegular caption={'Help'} icon={'md-help-buoy-outline'} iconFamily={'Ionicons'}/>
                    <SettingsItemBtnRegular caption={'About'} icon={'ios-information-circle-outline'} iconFamily={'Ionicons'}/>
                </View>
                <SettingsItemBtn btnColor={'#182230'} textColor={'#3a82f7'} caption={'Log out'} action={()=> logout_callback({navigation})}/>
            </View>
        </SafeAreaView>
    )
}

const css = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center'
    },

    wrapper: {
        width: '90%',
    },

    setingswrapper: {
        backgroundColor: '#161617',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
        marginBottom: 20
    },

    btnwrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    textbtn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 15
    },

    accesbtn: {
        backgroundColor: '#1a222f',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    }
})
