import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native"
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from "react";

const DATA = [
    {
        "id": "1",
        "name": "John Doe",
        "username": "@johndoe",
        "uri": "https://i.pravatar.cc/300",
    },
    {
        "id": "2",
        "name": "William Doe",
        "username": "@williamdoe",
        "uri": "https://i.pravatar.cc/300",
    },
    {
        "id": "3",
        "name": "Amanda Hui",
        "username": "@amandahui",
        "uri": "https://i.pravatar.cc/300",
    },
    {
        "id": "4",
        "name": "Bartolomeus Iubaiace",
        "username": "@bartolomeusiubaiace",
        "uri": "https://i.pravatar.cc/300",
    },
    {
        "id": "5",
        "name": "Christopher Columbus William",
        "username": "@christopherwilliam",
        "uri": "https://i.pravatar.cc/300",
    },

    {
        "id": "6",
        "name": "John Doe",
        "username": "@johndoe",
        "uri": "https://i.pravatar.cc/300",
    },
    {
        "id": "7",
        "name": "William Doe",
        "username": "@williamdoe",
        "uri": "https://i.pravatar.cc/300",
    },
    {
        "id": "8",
        "name": "Amanda Hui",
        "username": "@amandahui",
        "uri": "https://i.pravatar.cc/300",
    },

]


const SuggestedItem = ({name, uri, userid, firstitem, lastitem, username, deleteItem}) => {
    console.log(firstitem)
    return (
        <View style={userid == firstitem ? css.firstitem : userid == lastitem ? css.lastitem : css.avatarwrapp}>
            <TouchableOpacity 
                style={css.deletebtn} 
                onPress={() => deleteItem(userid)}
                >
                <Ionicons name="close" size={18} color="rgba(255,255,255, .4)" />
            </TouchableOpacity>
            <TouchableOpacity style={css.avatar}>
                <Image source={{uri: uri}} style={css.avatarimage}/>
            </TouchableOpacity>
            <View style={css.avatartext}>
                <Text style={css.avatartextname} numberOfLines={1}>{name}</Text>
                <Text style={css.username} numberOfLines={1}>{username}</Text>
            </View>
            <TouchableOpacity style={css.addto}>
                    <Text style={css.addtotext}>Add friend</Text>
            </TouchableOpacity>
        </View>
    )
}

export const SuggestedContact = () => {
    const [contactsList, setContactsList] = useState(DATA)

    const deleteItemById = (id) => {
        console.log('deleteld---------------')
        const newList = contactsList.filter(i => i.id !== id)
        setContactsList(newList)
    }


    let noItems = contactsList.length != 0 ? true : false
    let firstitem = noItems ? contactsList[0].id : 0
    let lastitem = noItems ? contactsList[contactsList.length - 1].id : 0
    return(
        noItems && 
        <View style={{width: '100%', alignSelf: 'center', alignItems: 'center', marginVertical: 18, justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%'}}>
                <Text style={css.sectiontitle}>Suggested Contacts</Text>
                <TouchableOpacity>
                    <Text style={css.viewall}>View all</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                style={{width: '100%', marginTop: 12}}
                data={contactsList}
                decelerationRate="fast"
                renderItem={({item}) => <SuggestedItem name={item.name} deleteItem={deleteItemById} username={item.username} uri={item.uri} userid={item.id} firstitem={firstitem} lastitem={lastitem}/>}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
                />
        </View>
    )
}

const css = StyleSheet.create({
    sectiontitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 6
    },
    viewall: {
        fontSize: 13,
        color: '#3a82f7',
        marginBottom: 6,
        fontWeight: '600'
    },

    avatar: {
        width: 75,
        height: 75,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: '#222226',
        alignItems: 'center',
        justifyContent: 'center'
    },

    avatarwrapp: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#222226',
        paddingHorizontal: 10,
        marginHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 15,
        width: 125,
        overflow: 'hidden',
    },

    noitems: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 18,
        backgroundColor: '#222226',
        padding: 12,
        borderRadius: 15,
    },
    
    noitemstext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 6
            
    },

    firstitem: {
        alignItems: 'center',
        backgroundColor: '#222226',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginLeft: 20, 
        marginRight: 8,
        paddingVertical: 12,
        borderRadius: 15,
        width: 125,
        overflow: 'hidden',
    },

    lastitem: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#222226',
        paddingHorizontal: 10,
        marginRight: 20, 
        marginLeft: 8,
        paddingVertical: 12,
        borderRadius: 15,
        width: 125, 
        overflow: 'hidden',
    },

    avatarimage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    avatartext: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    avatartextname: {
        fontSize: 15,
        fontWeight: '600',
        color: '#ffffff',
        textAlign: 'center',
    },

    username: {
        fontSize: 11,
        fontWeight: '400',
        color: 'rgba(255,255,255,0.65)',
        textAlign: 'center',
        marginTop: 2
    },

    addto: {
        backgroundColor: '#3a82f7',
        paddingVertical: 7,
        paddingHorizontal: 18,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15

    },

    addtotext: {
        fontSize: 13,
        fontWeight: '600',
        color: '#ffffff'
    },

    deletebtn: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 6,
        zIndex: 1
        
    }


}
)
