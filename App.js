
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateRecipe from './CreateRecipe.js';
import CreateAccount from './CreateAccount.js';
import Login from './Login.js';
import ListeRecipe from './ListeRecipe.js';
import { TouchableOpacity , Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();
const PRIMARY_COLOR = '#ce22f5';

export default function App() {
    return (
      <>
        <StatusBar style="light" />
         <View style={{ flex: 1, backgroundColor: 'white' }}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"   screenOptions={{ headerStyle: { backgroundColor: PRIMARY_COLOR }, headerTintColor: 'white'}}>

                <Stack.Screen name="Login" component={ Login }  />
                <Stack.Screen name="Recipe" component={ CreateRecipe } />
                <Stack.Screen name="Signup" component={ CreateAccount } />
                <Stack.Screen name="Recipes" component={ ListeRecipe }
                    options={({navigation}) => ({
                       headerBackVisible:false ,
                        headerRight: ()=> (
                            <TouchableOpacity  onPress={() => navigation.replace('Login')}>
                                   <Text style={{fontSize:20 , color:'white'}}>Log out</Text>
                            </TouchableOpacity>
                        ),
                    })} 
                 />
                
                    


            </Stack.Navigator>
        </NavigationContainer>
        </View>
     </>
    );
}





