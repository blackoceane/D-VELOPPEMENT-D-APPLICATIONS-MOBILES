
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import CreateRecipe from './CreateRecipe.js';
import CreateAccount from './CreateAccount.js';
import Login from './Login.js';

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">

                <Stack.Screen name="Login" component={ Login } />
                <Stack.Screen name="CreateRecipe" component={ CreateRecipe } />
                <Stack.Screen name="CreateAccount" component={ CreateAccount } />


            </Stack.Navigator>
        </NavigationContainer>
    );
}





