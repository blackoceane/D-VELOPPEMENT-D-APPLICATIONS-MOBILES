
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateRecipe from './CreateRecipe.js';
import CreateAccount from './CreateAccount.js';
import Login from './Login.js';
import ListeRecipe from './ListeRecipe.js';

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"   screenOptions={{ headerStyle: { backgroundColor: '#ce22f5' }, }}>

                <Stack.Screen name="Login" component={ Login } />
                <Stack.Screen name="Recipe" component={ CreateRecipe } />
                <Stack.Screen name="Signup" component={ CreateAccount } />
                <Stack.Screen name="Recipes" component={ ListeRecipe } />


            </Stack.Navigator>
        </NavigationContainer>
    );
}





