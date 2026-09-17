import { StyleSheet,Text, View, TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

function Login() {
  return (
    <View style={styles.screen}>

        <View style={styles.container}>
            <Text style={{ color: '#ce22f5', fontSize: 90, textAlign: 'center',  marginBottom: '20%'}}>Hello World</Text>
            <View style ={{ marginBottom: 20 }}>

                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={24} color="black" />
                    <TextInput style={styles.input} placeholder="Username"   autoCapitalize="none"/> 
                </View>

                <View style={styles.inputContainer}>
                    <FontAwesome name="lock" size={24} color="black" />
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
                </View>

            </View>

            <View style={{ margin: 10  }} >
               <Button  color= '#ce22f5'   screen="Recipes"> Login </Button>
            </View>

            <View  style={{ marginTop: 20 , width: '80%' }}>
                <Text style={{  textAlign: 'center'}}>Don't have an account ? <Link screen="Signup" style={{ color: '#ce22f5',  }}> Create </Link>  </Text>
            </View>

        </View>

    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
                       
    justifyContent: 'center', 
    alignItems: 'center'  , 
    margin:'auto',
    padding: 20,
    
  },
  input: {
    width: '70%',
    height: 40,
    margin: 10,
    padding: 10,
  },
 inputContainer: {
    width: '100%', // a reflechir
    flexDirection: 'row',      
    alignItems: 'center',      
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    margin:20,
  },
  icon: {
    marginRight: 8,            
  },
});
export default Login;