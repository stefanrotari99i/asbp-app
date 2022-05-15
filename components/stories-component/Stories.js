import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';  
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 



const DATA = [
    {
        id: 0,
        name: 'Stefan',
        uri: 'https://internationaljournalofresearch.files.wordpress.com/2019/11/www.usnews.com_.jpg',
    },

    {
        id: 1,
        name: 'David Rotari',
        uri: 'https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },

    {
        id: 3,
        name: 'John Smith',
        uri: 'https://apollo-aachen.de/wp-content/uploads/2019/08/party-1170x550.jpg',
    },

    {
        id: 4,
        name: 'Adam Sandler',
        uri: 'https://internationaljournalofresearch.files.wordpress.com/2019/11/www.usnews.com_.jpg',
    },

    {
        id: 5,
        name: 'Chirs Meet',
        uri: 'https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },

    {
        id: 6,
        name: 'Wanda Maximof',
        uri: 'https://apollo-aachen.de/wp-content/uploads/2019/08/party-1170x550.jpg',
    }
]


// Event Item
const Event = ({name, uri}) => {
    const [addto, setAddTo] = useState(true)

    return(
        <TouchableOpacity style={css.storyitem}>
            <LinearGradient 
                colors={['#624098', '#a06af6']}
                style={css.gradient}
            >
                <Image source={{uri: uri}} style={css.storyimg} resizeMode={'cover'}/>
            </LinearGradient>
            <Text style={css.storyname}>{name}</Text>
        </TouchableOpacity>
)}

const MyStory =()=> (
    <TouchableOpacity style={css.my_storyitem}>
        <Image source={{uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'}} style={css.my_storyimg} resizeMode={'cover'}/>
        <Text style={css.my_storyname}>You</Text>
        <TouchableOpacity style={css.mystoryadd}>
            <MaterialIcons name="add" size={20} color="#fff" />
        </TouchableOpacity>
    </TouchableOpacity>
)



export const Stories = () => {
    const renderEvent = ({item}) => <Event name={item.name} uri={item.uri}/>;
    const keyExtractor = (item) => item.id;
    return(
        <View style={{marginVertical: 15}}>
            <FlatList
                horizontal
                data={DATA}
                renderItem={renderEvent}
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={MyStory}
            />
      </View>
    )
}

const css = StyleSheet.create({
    storyitem: {
        alignItems: 'center',
        marginHorizontal: 7,
    },

    my_storyitem: {
        alignItems: 'center',
        marginLeft: 20,
        alignSelf: 'center',
        marginRight: 10
    },

   storyimg: {
       width: 70,
       height: 70,
       borderRadius: 50,
       borderColor:'#121212',
       borderWidth: 3.5
   },

   my_storyimg: {
        width: 73.5,
        height: 73.5,
        borderRadius: 50,
        borderColor:'#121212',
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
       width: 74,
       height: 74,
       borderRadius: 50,
       alignItems: 'center',
       justifyContent: 'center'
   },

   mystoryadd: {
       position: 'absolute',
       right: 2,
       bottom: 29,
       backgroundColor: '#624098',
       borderRadius: 50,
       padding: 1

   }
})