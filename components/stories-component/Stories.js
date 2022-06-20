import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';  
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';  



const DATA = [
    {
        id: 0,
        name: 'Stefan',
        uri: 'https://i.pravatar.cc/300',
    },

    {
        id: 1,
        name: 'David Rotari',
        uri: 'https://i.pravatar.cc/300',
    },

    {
        id: 3,
        name: 'John Smith',
        uri: 'https://i.pravatar.cc/300',
    },

    {
        id: 4,
        name: 'Adam Sandler',
        uri: 'https://i.pravatar.cc/300',
    },

    {
        id: 5,
        name: 'Chirs Meet',
        uri: 'https://i.pravatar.cc/300',
    },

    {
        id: 6,
        name: 'Wanda Maximof',
        uri: 'https://i.pravatar.cc/300',
    },

    {
        id: 7,
        name: 'John Smith',
        uri: 'https://i.pravatar.cc/300',
    },

    {
        id: 8,
        name: 'Adam Sandler',
        uri: 'https://i.pravatar.cc/300',
    },

    {
        id: 9,
        name: 'Chirs Meet',
        uri: 'https://i.pravatar.cc/300',
    },

    {
        id: 10,
        name: 'Wanda Maximof',
        uri: 'https://i.pravatar.cc/300',
    },
    
]


// Event Item
const Event = ({name, uri, id, lastitem, navigation}) => {
    const [addto, setAddTo] = useState(true)

    return(
        <TouchableOpacity style={lastitem == id ? css.laststoryitem : css.storyitem} onPress={() => navigation.push('StoriesOpen') }>
            <LinearGradient 
                colors={['#8E2DE2', '#3a82f7']}
                style={css.gradient}
            >
                <Image source={{uri: uri}} style={css.storyimg} resizeMode={'cover'}/>
            </LinearGradient>
            <Text style={css.storyname}>{name}</Text>
        </TouchableOpacity>
)}

const MyStory =()=> (
    <TouchableOpacity style={css.my_storyitem}>
        <Image source={{uri: 'https://i.pravatar.cc/300'}} style={css.my_storyimg} resizeMode={'cover'}/>
        <Text style={css.my_storyname}>You</Text>
        <TouchableOpacity style={css.mystoryadd}>
            <Entypo name="plus" size={18} color="#fff" />
        </TouchableOpacity>
    </TouchableOpacity>
)



export const Stories = ({navigation}) => {
    let lastitem = DATA[DATA.length - 1].id
    const renderEvent = ({item}) => <Event name={item.name} uri={item.uri} id={item.id} lastitem={lastitem} navigation={navigation}/>;
    const keyExtractor = (item) => item.id;
    return(
        <View style={{marginTop: 15, marginBottom: 3,}}>
            <FlatList
                horizontal
                data={DATA}
                renderItem={renderEvent}
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={MyStory}
            />
            <View style={css.separator}>

            </View>
      </View>
    )
}

const css = StyleSheet.create({
    storyitem: {
        alignItems: 'center',
        marginHorizontal: 7,
    },

    laststoryitem: {
        alignItems: 'center',
        marginLeft: 7,
        marginRight: 20,
    },

    separator: {
        height: 1,
        backgroundColor: 'rgba(255,255,255, .1)',
        marginTop: 15,
        marginBottom: 2,
    },
    

    my_storyitem: {
        alignItems: 'center',
        marginLeft: 20,
        alignSelf: 'center',
        marginRight: 10
    },

   storyimg: {
       width: 75,
       height: 95,
       borderRadius: 10,
       borderColor:'#121212',
       borderWidth: 3.5
   },

   my_storyimg: {
        width: 78.5,
        height: 98.5,
        borderRadius: 10,
        borderColor:'#222226',
        borderWidth: 5
   },

   storyname: {
       fontSize: 12,
       color: '#fff',
       marginTop: 8
   },

   my_storyname: {
        fontSize: 12,
        color: 'rgba(255,255,255, .7)',
        fontWeight: '600',
        marginTop: 8
   },

   gradient: {
       width: 79,
       height: 99,
       borderRadius: 10,
       alignItems: 'center',
       justifyContent: 'center'
   },

   mystoryadd: {
       position: 'absolute',
       right: -5,
       bottom: 20,
       backgroundColor: '#3a82f7',
       borderRadius: 50,
       padding: 1,
       borderWidth: 2.5,
       borderColor: '#275fba'

   }
})