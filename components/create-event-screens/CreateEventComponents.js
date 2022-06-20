import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput, Image} from "react-native"


export const CreateEventIndicator = ({screen}) => {
    return(
        <View style={{width: '90%', flexDirection: 'row', alignSelf: 'center', marginBottom: 20, justifyContent: 'space-between'}}>
            <View style={css.indicator}></View>
            <View style={screen == 2 || screen > 2 ? css.indicator : css.idnicatorInactive}></View>
            <View style={screen == 3 ? css.indicator : css.idnicatorInactive}></View>
        </View>
    )
}

const css = StyleSheet.create({
    indicator: {
        height: 6,
        borderRadius: 15,
        width: '30%',
        backgroundColor: '#d6fc51'
    },
    idnicatorInactive: {
        height: 6,
        borderRadius: 15,
        width: '30%',
        backgroundColor: '#161617'
    }
})