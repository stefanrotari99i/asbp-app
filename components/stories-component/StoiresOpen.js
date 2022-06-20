import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Animated, Dimensions, Text, TouchableWithoutFeedback, TextInput} from "react-native"
import React, {useState, useEffect, useCallback, useRef} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useKeyboard } from "../otherComponents/KeyboardComp";

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const DATA = {
    user_id_1:{
        user_id: 1,
        stories: [
            {
                id: 1,
                title: 'Story 1',
                uri: 'https://picsum.photos/800/1200'
            },
            {
                id: 2,
                title: 'Story 2',
                uri: 'https://picsum.photos/800/1200'
            },
            {
                id: 3,
                title: 'Story 3',
                uri: 'https://picsum.photos/800/1200'
            },
            {
                id: 4,
                title: 'Story 4',
                uri: 'https://picsum.photos/800/1200'
            },
            {
                id: 5,
                title: 'Story 5',
                uri: 'https://picsum.photos/800/1200'
            }


        ]
    },
    user_id_2:{
        user_id: 2,
        stories: [
            {
                id: 1,
                title: 'User 2 Story 1',
                uri: 'https://picsum.photos/800/1200'
            },
            {
                id: 2,
                title: 'User 2 Story 2',
                uri: 'https://picsum.photos/800/1200'
            },
            {
                id: 3,
                title: 'User 2 Story 3',
                uri: 'https://picsum.photos/800/1200'
            },
            {
                id: 4,
                title: 'User 2 Story 4',
                uri: 'https://picsum.photos/800/1200'
            },
            {
                id: 5,
                title: 'User 2 Story 5',
                uri: 'https://picsum.photos/800/1200'
            }
        ]
    },

    user_id_3:{
        user_id: 3,
        stories: [
            {
                id: 1,
                title: 'User 3 Story 1',
                uri: 'https://picsum.photos/800/1200'
            },
            {
                id: 2,
                title: 'User 3 Story 2',
                uri: 'https://picsum.photos/800/1200'
            },
            {
                id: 3,
                title: 'User 3 Story 3',
                uri: 'https://picsum.photos/800/1200'
            },
        ]
    }
}

export const StoriesOpen = ({navigation}) => {
    const [storyProgress, setstoryProgress] = useState(0)
    const [time, settime] = useState(10*600)
    
    useEffect(() => {
      if (storyProgress < time && storyProgress > -1) {
        const timer = setTimeout(() => setstoryProgress(storyProgress+10), 10)
        return () => clearTimeout(timer)
      }

      if(storyProgress === 6000) {
        navigation.goBack()
      }
    }, [storyProgress, time])

    const [ref, setRef] = useState(null)
    const [index, setIndex] = useState(0);
    const [stories, setStories] = useState(DATA.user_id_1.stories)
    const [likeStory, setLikeStory] = useState(false)

    const keyboardHeight = useKeyboard();
    const transalateY = useRef(new Animated.Value(0)).current;
    Animated.timing(transalateY, {
      toValue: -keyboardHeight,
      duration: 200,
      useNativeDriver: true,
    }).start();

    return(
        <View style={css.container}>
            <SafeAreaView style={css.indicatorwrap}>
                <View style={{borderRadius: 10, top: 0, width: storyProgress / 60 + '%', alingSelf: 'center', height: 4, backgroundColor: 'rgba(255,255,255,1)', zIndex: 1}}></View>
                <View style={css.storyheader}>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={{uri: 'https://picsum.photos/800/1200'}} style={css.useravatar}/>
                        <Text style={css.username}>Ștefan Rotari</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.closewrapp} onPress={()=> navigation.goBack()}>
                        <Ionicons name="close" size={32} color="rgba(255,255,255, 1)" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <Animated.View style={[css.responsewrapp, {transform: [{translateY: transalateY}]}]}>
                <TextInput
                    style={css.responseinput}
                    placeholder="Type a response..."
                    placeholderTextColor="#fff"
                    keyboardAppearance="dark"

                />
                <TouchableOpacity onPress={()=> setLikeStory(!likeStory)}>
                    {likeStory ? <Ionicons name="heart" size={38} color="crimson" /> : 
                    <Ionicons name="heart-outline" size={38} color="rgba(255,255,255, 1)" />}
                </TouchableOpacity>
            </Animated.View>
            <FlatList
                data={stories}
                renderItem={({ item, index}) => (
                    <TouchableWithoutFeedback
                        onPress={(event) => {
                            setLikeStory(false)
                            setstoryProgress(0)
                            let k=(event.nativeEvent.locationX > windowsWidth / 2 ?  1 : - 1);
                            k = index + k <= 0 ? 0 : index + k;
                            if(k === stories.length-1) {
                                ref.scrollToIndex({animated: true, index: 0});
                                setStories(DATA.user_id_2.stories)
                            } else 
                            ref.scrollToIndex({animated: true, index: k});
                            console.log(item.title)
                        }}
                    >
                        <Image style={css.stories} source={{uri: item.uri}} />
                    </TouchableWithoutFeedback>
                )}
                keyExtractor={item => item.id}
                horizontal={true}
                bounces={false}
                initialNumToRender={1}
                scrollEnabled={false}
                ref={(ref) => {
                    setRef(ref);
                  }}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
            />

        </View>
    )
}


const css = StyleSheet.create(
    {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },

    stories: {
        width: windowsWidth,
        height: windowsHeight,
        resizeMode: 'cover',
    },

    indicatorwrap: {
        position: 'absolute',
        top: 25,
        flex: 1,
        left: '2.5%',
        width: '95%',
        height: '100%',
        borderRadius: 10,
        alingSelf: 'center',
        height: 4,
        backgroundColor: 'rgba(255,255,255,0.5)',
        zIndex: 1,
    },

    closewrapp: {
        position: 'absolute',
        right: '2.5%',
    },

    // respone wrapp
    responsewrapp: {
        position: 'absolute',
        left: '2.5%',
        width: '90%',
        bottom: 30,
        borderRadius: 50,
        alingSelf: 'center',
        height: 45,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    responseinput: {
        width: '85%',
        height: '100%',
        borderRadius: 50,
        backgroundColor: 'rgba(255,255,255,0.5)',
        color: 'black',
        fontSize: 16,
        padding: '5%',
        textAlign: 'left',
    },

    storyheader: {
        position: 'absolute',
        top: 20,
        left: '2.5%',
        width: '95%',
    },

    useravatar: {
        width: 35,
        height: 35,
        borderRadius: 20,
        marginRight: '3%',

    },

    username: {
        fontSize: 14,
        color: 'white',
        fontWeight: '500',

    }



})