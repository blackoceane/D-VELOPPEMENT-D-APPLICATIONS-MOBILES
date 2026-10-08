
import { Button } from 'react-native';
import { StyleSheet, Text, View, TextInput,Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';


const options = [
        {
            id: '1',
            label: 'Breakfast',
            value: 'breakfast'
        },
        {
            id: '2',
            label: 'Lunch',
            value: 'lunch'
        },
         {
            id: '3',
            label: 'Dinner',
            value: 'dinner'
        }
    ];
 


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





