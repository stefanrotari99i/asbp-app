import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginPage } from './components/authorization/LoginPage';
import { RegisterPage } from './components/authorization/RegisterPage';
import {WelcomePage} from './components/authorization/WelcomePage'

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomePage} options= {{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginPage} options= {{headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterPage} options= {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
