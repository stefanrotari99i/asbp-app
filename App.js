import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginPage } from './components/authorization/LoginPage';
import { RegisterPage } from './components/authorization/RegisterPage';
import {WelcomePage} from './components/authorization/WelcomePage'
import { CreateEvent } from './components/create-event-screens/CreateEventScreen';
import { CreateEventScreen2 } from './components/create-event-screens/CreateEventScreen2';
import {MainScreen} from './components/main-screen/MainScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: '#fff',
  opacity: .2,
  tabBarInactiveTintColor: '#666666',
  tabBarStyle:{
    backgroundColor:'#121212',
    height: 90,
    borderTopWidth: 0,

  },
  tabBarItemStyle:{
    margin:5,
  },
};

//custom tabBarButton
const TabBarAdvancedButton = ({navigation}) => {
  return (
    <View style={styles.container} pointerEvents="box-none">
      <View style={styles.background}></View>
      <TouchableOpacity
        style={styles.button}
        onPress={()=> navigation.navigate(CreateEvent)}
        >
    
        <Entypo name="plus" size={26} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

function HomeTabs({navigation}) {
  return (
    <Tab.Navigator  {...{ screenOptions }}>
      <Tab.Screen name="Events" component={MainScreen} options={{tabBarIcon: ({ color, size, focused }) => (<Ionicons  name={focused ? "ios-calendar" : "ios-calendar-outline"} color={color} size={22} />),}}  />
      <Tab.Screen name="Add Event" component={CreateEvent}  
        options={{
          tabBarButton: (props) => (
            <TabBarAdvancedButton
              navigation={navigation}
            />
          )
        }}
      />
      <Tab.Screen name="Account" component={LoginPage} options={{tabBarIcon: ({ color, size, focused }) => (<FontAwesome  name={focused ? "user" : "user-o"} color={color} size={22} />),}}  />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomePage} options= {{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginPage} options= {{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterPage} options= {{headerShown: false}}/>
        <Stack.Screen name="CreateEvent" component={CreateEvent} options= {{headerShown: false}}/>
        <Stack.Screen name="CreateEventNext" component={CreateEventScreen2} options= {{headerShown: false}}/>
        <Stack.Screen name="Main" component={HomeTabs} options= {{headerShown: false}}/>
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
    background: {
      position: 'absolute',
      top: 0,
      backgroundColor: '#121212'
    },
    button: {
      top: -22.5,
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
      borderRadius: 50,
      backgroundColor: '#624098',
    },
    buttonIcon: {
      fontSize: 16,
      color: '#F6F7EB'
    }
  });
  
export default App;
