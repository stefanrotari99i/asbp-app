import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput, Image} from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { handleTime } from "../TextFormat";
import { PrimaryButton } from "../buttons/Buttons";
import * as ImagePicker from 'expo-image-picker';
import { PrimaryHeader } from "../Headers";
import { CreateEventIndicator } from "./CreateEventComponents";


export const CreateEvent = ({navigation}) => {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 2],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return(
        <View style={css.container}>
            <SafeAreaView>
                <PrimaryHeader  navigation={navigation} caption={'Create event'}/>
                <CreateEventIndicator screen={1}/>
            </SafeAreaView>
            <KeyboardAwareScrollView style={{flex: 1}}>
                <View style={{width: '93%', alignItems: 'center', alignSelf: 'center', marginBottom: 15}}>

                    {/* Event Image Pciker */}
                    <TouchableOpacity style={css.imginput} onPress={pickImage}>
                        <View style={{position: 'absolute', alignItems: 'center'}}>
                            <AntDesign name="addfile" size={24} color='rgba(255,255,255, .8)' />
                            <Text style={css.imginputtext}> Add event image</Text>
                        </View>
                        {image && <Image style={css.uploadimg} source={{ uri: image }} resizeMode={'cover'} /> }
                    </TouchableOpacity>
                    {/* Event Name */}
                    <View style={css.inputwrapper}>
                        <TextInput style={css.input} placeholder='Event name' placeholderTextColor={'rgba(255,255,255, .5)'} keyboardAppearance={'dark'}/>
                    </View>

                    <View style={css.inputwrapper}>
                        <TextInput style={css.input} placeholder='Event name' placeholderTextColor={'rgba(255,255,255, .5)'} keyboardAppearance={'dark'}/>
                    </View>

                    {/* Event Date and Time */}
                    <View style={css.timesetwrapper}>
                        <TouchableOpacity style={css.inputwrapper_half} onPress={showDatepicker}>
                            <Text style={css.timesettext}>{date.toLocaleDateString('ro-RO')}</Text>
                            <Feather name="calendar" size={24} color="rgba(255,255,255, .8)" />
                        </TouchableOpacity>
                        <TouchableOpacity style={css.inputwrapper_half} onPress={showTimepicker}>
                            <Text style={css.timesettext}>{handleTime(date)}</Text>
                            <Feather name="clock" size={24} color="rgba(255,255,255, .8)" />
                        </TouchableOpacity>
                    </View>

                    {/* Event Description */}
                    <View style={css.inputtextareawrapper}>
                        <TextInput style={css.inputtextarea} placeholder='Event description' multiline={true} keyboardAppearance={'dark'} placeholderTextColor={'rgba(255,255,255, .5)'}/>
                    </View>

                    {/* Event Loaction */}
                    <View style={css.iconinput}>
                        <TextInput style={css.input} placeholder='Location' placeholderTextColor={'rgba(255,255,255, .5)'} keyboardAppearance={'dark'}/>
                        <Ionicons name="ios-location-outline" size={24} color="rgba(255,255,255, .8)" />
                    </View>

                    {/* Event create button */}
                    <PrimaryButton caption={'Next step'} action={() => navigation.navigate('CreateEventNext')}/>
                </View>

            </KeyboardAwareScrollView>
            {show && (
                    <View style={{position: 'absolute', width: '100%', left: 0, zIndex: 2, bottom: 0, backgroundColor: '#121212',}}>
                        <View style={css.setdatecontainer}>
                            <TouchableOpacity style={css.setdatewrapper} onPress={() => setShow(false)}>
                                <Text style={css.setdatetext}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={css.setdatewrapper} onPress={() => setShow(false)}>
                                <Text style={css.setdatetext}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            onChange={onChange}
                            display={'spinner'}
                            themeVariant="dark"
                        />
                    </View>
                )}
        </View>
    )
}

const css = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
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
        height: 200,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20
    },
    
    imginputtext: {
        color: 'rgba(255,255,255, .8)',
        fontSize: 16,
        marginTop: 10
    },


    inputwrapper: {
        backgroundColor: '#161617',
        borderWidth: 1,
        height: 62,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },

    inputtextareawrapper: {
        backgroundColor: '#161617',
        borderWidth: 1,
        height: 120,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginBottom: 15,
        paddingVertical: 12
    },

    inputtextarea: {
        width: '90%',
        color: '#fff',
        fontWeight: '500',
        fontSize: 15,
    },

    iconinput: {
        backgroundColor: '#161617',
        borderWidth: 1,
        height: 62,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },

    inputwrapper_half: {
        backgroundColor: '#161617',
        borderWidth: 1,
        height: 62,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '48%',
        marginBottom: 15,
        justifyContent: 'space-between'
    },

    sectiontitle: {
        fontSize: 22,
        color: '#fff',
        fontWeight: '600',
        alignSelf: 'flex-start',
        marginBottom: 20
    },

    timesetwrapper: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },

    timesettext: {
        color: 'rgba(255,255,255, .5)',
        fontSize: 16
    },

    setdatecontainer: {
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'space-between'
    },  

    setdatetext: {
        color: 'rgba(255,255,255, .6)',
        fontSize: 16
    },

    uploadimg: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    }
})