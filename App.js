import { NavigationContainer, useScrollToTop } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginPage } from './components/authorization/LoginPage';
import { RegisterPage } from './components/authorization/RegisterPage';
import {WelcomePage} from './components/authorization/WelcomePage'
import { CreateEvent } from './components/create-event-screens/CreateEventScreen';
import { CreateEventScreen2 } from './components/create-event-screens/CreateEventScreen2';
import { CreateEventScreen3 } from './components/create-event-screens/CreateEventScreen3';
import {MainScreen} from './components/main-screen/MainScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Profile } from './components/user_profile/Profile';
import { AccountSettings } from './components/settings_screen/AccountSetting';
import { BlurView } from 'expo-blur';
import { Octicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import 'react-native-gesture-handler';
import { StoriesOpen } from './components/stories-component/StoiresOpen'; 
import { EventScreenOpen } from './components/event-screen-component/EventScreen';
import { ChatMainScreen } from './components/chat/ChatMainScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#3a82f7',
  tabBarInactiveTintColor: '#fff',
  tabBarStyle:{
    height: 90,
    width: '100%',
    borderTopWidth: 0,
    backgroundColor:'#0f0f0f',

  },
  tabBarItemStyle:{
  },
};

function HomeTabs({navigation}) {

  return (
    <Tab.Navigator  {...{ screenOptions }}>
      <Tab.Screen name="Events" component={MainScreen} options={{tabBarIcon: ({ color, size, focused }) => (<Ionicons  name={focused ? "ios-calendar" : "ios-calendar-outline"} color={color} size={26} />),}}  />
      <Tab.Screen name="Explore" component={MainScreen} options={{tabBarIcon: ({ color, size, focused }) => (<Octicons  name={focused ? "search" : "search"} color={color} size={26} />),}}  />
      <Tab.Screen name="Add Event" component={CreateEvent}  options={{tabBarIcon: ({ color, size, focused }) => (<Entypo  style={{borderColor: color, borderWidth: 2, borderRadius: 7}} name={focused ? "plus" : "plus"} color={color} size={22} />),}} />
      <Tab.Screen name="Chat" component={ChatMainScreen} options={{tabBarBadge: 99 ,tabBarIcon: ({ color, size, focused }) => (<Ionicons  name={focused ? "chatbubble-ellipses-sharp" : "chatbubble-ellipses-outline"} color={color} size={26} />),}}  />
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ({ color, size, focused }) => (<FontAwesome  name={focused ? "user" : "user-o"} color={color} size={26} />),}}  />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomePage} options= {{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginPage} options= {{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterPage} options= {{headerShown: false}}/>
        <Stack.Screen name="CreateEvent" component={CreateEvent} options= {{headerShown: false}}/>
        <Stack.Screen name="CreateEventNext" component={CreateEventScreen2} options= {{headerShown: false}}/>
        <Stack.Screen name="CreateEventDrink" component={CreateEventScreen3} options= {{headerShown: false}}/>
        <Stack.Screen name="Main" component={HomeTabs} options= {{headerShown: false}}/>
        <Stack.Screen name="Profile" component={HomeTabs} options= {{headerShown: false}}/>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="StoriesOpen" component={StoriesOpen} options= {{headerShown: false}}/>
          <Stack.Screen name="Settings" component={AccountSettings} options= {{headerShown: false}}/>
          <Stack.Screen name="EventScreenOpen" component={EventScreenOpen} options= {{headerShown: false}}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
      position: 'relative',
      width: 90,
      alignItems: 'center'
    },

    button: {
      top: 0,
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
      borderRadius: 50,
      backgroundColor: '#3a82f7',
      borderWidth: 3,
      borderColor: '#275fba'
    },
    buttonIcon: {
      fontSize: 16,
      color: '#3a82f7'
    },

    blurwrapp: {
      width: 80,
      height: 80,
      top: -10,
      position: 'absolute',
      overflow: 'hidden',
      borderRadius: 50
    },

    blur: {
      width: '100%',
      height: 60,
      borderRadius: 15,
    },

    blurBtn: {
      width: '100%',
      height: '100%',

    }
  });
  
export default App;
