import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SearchBar } from '../Search'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useScrollToTop  } from '@react-navigation/native';
const DATA = [
    {
        id: "1",
        name: "stefan.rotari_",
        avatar: "https://i.pravatar.cc/200",
        message: "Hello there. Thanks for the follow. Did you notice, that I am an egg? A talking egg? Damn!",
        time: "12:00",
        date: 'Today',
        isOnline: true,
        isTyping: false,
        isRead: false,
    },

    {
        id: "2",
        name: "katja_krause",
        avatar: "https://i.pravatar.cc/200",
        message: "Yeah that is crazy",
        time: "12:00",
        date: 'Today',
        isOnline: false,
        isTyping: false,
        isRead: true,
    },

    {
        id: "3",
        name: "adam.wilson",
        avatar: "https://i.pravatar.cc/200",
        message: "Thanks mate! Feel way better now. Oh, and guys, these messages will be removed once your add your own :-)",
        time: "12:00",
        date: 'Today',
        isOnline: true,
        isTyping: false,
        isRead: true,
    },

    {
        id: "4",
        name: "will.smith",
        avatar: "https://i.pravatar.cc/200",
        message: 'Yeah that is crazy, but people can change their own picture and build their own Twitter conversation with this generator, so it does not matter that you are an egg.',
        time: "20:45",
        date: 'Yesterday',
        isOnline: false,
        isTyping: false,
        isRead: true,
    },

    {
        id: "5",
        name: "james.bond",
        avatar: "https://i.pravatar.cc/200",
        message: "Thanks mate! Feel way better now. Oh, and guys, these messages will be removed once your add your own :-)",
        time: "12:00",
        date: 'Yesterday',
        isOnline: true,
        isTyping: false,
        isRead: true,
    }

    ,
    {
        id: "6",
        name: "will.smith",
        avatar: "https://i.pravatar.cc/200",
        message: "Thanks mate! Feel way better now. Oh, and guys, these messages will be removed once your add your own :-)",
        time: "12:00",
        date: '17 Jun',
        date: 'Today',
        isOnline: true,
        isTyping: false,
        isRead: true,
    },

    {
        id: "7",
        name: "james.bond",
        avatar: "https://i.pravatar.cc/200",
        message: "Thanks mate! Feel way better now. Oh, and guys, these messages will be removed once your add your own :-)",
        time: "12:00",
        date: '10 May',
        isOnline: false,
        isTyping: false,
        isRead: true,
    },

    {
        id: "8",
        name: "will.smith",
        avatar: "https://i.pravatar.cc/200",
        message: "Thanks mate! Feel way better now. Oh, and guys, these messages will be removed once your add your own :-)",
        time: "12:00",
        date: '25 Apr',
        isOnline: true,
        isTyping: false,
        isRead: true,
    },

    {
        id: "9",
        name: "james.bond",
        avatar: "https://i.pravatar.cc/200",
        message: "Thanks mate! Feel way better now. Oh, and guys, these messages will be removed once your add your own :-)",
        time: "12:00",
        date: '8 Mar',
        isOnline: false,
        isTyping: false,
        isRead: true,
    },

];


export const ChatMainScreen = () => {
    const ref = React.useRef(null);

    useScrollToTop(ref);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertext}>stefan.rotari_</Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="pencil-box-multiple-outline" size={28} color="#fff" />
                </TouchableOpacity>
            </View>
            <SearchBar />
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <TouchableOpacity  style={styles.chat}>
                        <View style={styles.chatavatar}>
                            <Image source={{ uri: item.avatar }} style={styles.avatar} />
                            {item.isOnline ? <View style={styles.online} /> : null}
                        </View>
                        <View style={styles.chatmessage}>
                            <Text style={styles.chatname}>{item.name}</Text>
                            <Text numberOfLines={1} style={item.isRead ? styles.chattext : styles.chattextunread}>{item.message}</Text>
                        </View>
                        <View style={{paddingLeft: 10, alignItems: 'center', justifyContent: 'center'}}>
                            <Text numberOfLines={1} style={styles.chatdate}>{item.date}</Text>
                            <Text style={styles.chattime}>{item.time}</Text>

                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
             />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingVertical: 10,
        alignSelf: 'center',
    },

    headertext: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },

    chat: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#000',
        width: '90%',
        alignSelf: 'center',
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#222226',
        marginRight: 10,
    },

    chatmessage: {
        flex: 1,
    },

    chatname: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '500',
    },

    chattext: {
        fontSize: 14,
        color: 'rgba(255,255,255, .6)',
        fontWeight: '400',
        marginTop: 4,
    },

    chattextunread: {
        fontSize: 14,
        color: 'rgba(255,255,255, 1)',
        fontWeight: '500',
        marginTop: 4,
    },

    chattime: {
        fontSize: 12,
        color: 'rgba(255,255,255, .7)',
        fontWeight: '500',
       textAlign: 'right',
        width: 45
    },

    chatdate: {
        fontSize: 12,
        color: 'rgba(255,255,255, .7)',
        fontWeight: '500',
        textAlign: 'right',
        marginBottom: 3,
        width: 45
    },
    
    online: {
        position: 'absolute',
        right: 11,
        bottom: 2,
        width: 15,
        height: 15,
        borderColor: '#000' ,
        borderWidth: 2.5,
        borderRadius: 50,
        backgroundColor: '#36d45d',
    }

});
