import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Animated} from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { useState } from 'react'
import { PrimaryButton } from "../buttons/Buttons";
import { PrimaryHeader } from "../Headers";
import { CreateEventIndicator } from "./CreateEventComponents";
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { FlatList } from "react-native-web";


const fieldList = [
    {
        id: 1,
        name: 'Drink 1',
        count: '1.5',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
]

const ItemDrink = ({item}) => {
    const [image, setImage] = useState(null);
    const drinkid = itemId;
    console.log(drinkid)
    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 2],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return(
        <Swipeable renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, drinkid)} >
            <View style={css.field}>
                <TouchableOpacity style={css.imginput} onPress={pickImage}>
                    <View style={{position: 'absolute', alignItems: 'center'}}>
                        <AntDesign name="addfile" size={24} color='rgba(255,255,255, .8)' />
                        <Text style={css.imginputtext}>Add drink image</Text>
                    </View>
                    {image && <Image style={css.uploadimg} source={{ uri: image }} resizeMode={'cover'} /> }
                </TouchableOpacity>
                <View style={css.fieldwrapper}>
                    <View style={css.inputwrapper}>
                        <TextInput style={css.input} placeholder='Drink name' placeholderTextColor={'rgba(255,255,255, .5)'} keyboardAppearance={'dark'}/>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={css.countinput}>
                            <TextInput style={css.input} placeholder='Liters of drinks' placeholderTextColor={'rgba(255,255,255, .5)'} keyboardAppearance={'dark'}/>
                        </View>
                    </View>
                </View>
            </View>
        </Swipeable>
    )
}

export const CreateEventScreen3 = ({navigation}) => {


    const renderRightActions = (progress, dragX, drinkid) => {
        const translateX = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
        });
        return (
            <View style={css.rightaction}>
                <TouchableOpacity style={css.action} onPress={()=> deleteItem(drinkid)}>
                    <Entypo name="trash" size={24} color='rgba(255,255,255, .8)' />
                </TouchableOpacity>
            </View>
        );
    };

    const deleteItem = (itemId) => {
        console.log(fieldList)
    };


    const onAddBtnClick = () => {
        setFieldList(fieldList.concat(<ItemDrink itemId={Date.now()} renderRightActions={renderRightActions}/>));
    };
    return(
        <View style={css.container}>
            <SafeAreaView>
                <PrimaryHeader  navigation={navigation} caption={'Add drinks'}/>
                <CreateEventIndicator screen={3}/>
            </SafeAreaView>
            <KeyboardAwareScrollView style={{flex: 1}}>
                <View style={{width: '90%', alignItems: 'center', alignSelf: 'center', marginBottom: 15}}>
                    <FlatList
                        data={fieldList}
                        renderItem={({item}) => <ItemDrink/>}
                        keyExtractor={item => item.id}
                    />
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: 25}} onPress={onAddBtnClick}>
                        <Entypo name="plus" size={30} color="#fff" />
                        <Text style={{color: '#fff', fontSize: 16, fontWeight: '700', marginLeft: 10}}>Add more</Text>
                    </TouchableOpacity>
                    <PrimaryButton caption={'Submit'} action={() => navigation.navigate('Main')}/>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

const css = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
    },

    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'rgba(255,255,255, .2)',
        borderBottomWidth: .3,
        marginVertical: 10,
    },

    fieldwrapper: {
        width: '65%',
    },

    rightaction: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 10,
    },

    action: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 10,
    },
    

    inputwrapper: {
        backgroundColor: '#161617',
        borderWidth: 1,
        height: 62,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginBottom: 10
    },

    countinput: {
        backgroundColor: '#161617',
        borderWidth: 1,
        height: 62,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
        marginBottom: 15
    },

    
    input: {
        width: '89%',
        height: '100%',
        color: '#fff',
        fontWeight: '500',
        fontSize: 15
    },

    imginput: {
        backgroundColor: '#161617',
        borderWidth: 1,
        height: 140,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        marginBottom: 20
    },
    
    imginputtext: {
        color: 'rgba(255,255,255, .8)',
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center'
    },

    
    uploadimg: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    }

})