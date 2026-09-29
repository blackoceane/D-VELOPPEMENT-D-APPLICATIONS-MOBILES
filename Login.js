import { StyleSheet,Text, View, TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

const PRIMARY_COLOR = '#ce22f5';


function Login() {
  return (
    <View style={styles.screen}>
        <View style={styles.container}>
            <View style={styles.header}>
              <Text style={{ color:PRIMARY_COLOR, fontSize: 90, textAlign: 'center'}}>Hello World</Text>
            </View>

            <View style ={{ flex: 1, justifyContent:'center' }}>
                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={24} color="black" />
                    <TextInput style={styles.input} placeholder="Username"   autoCapitalize="none"/> 
                </View>

                <View style={styles.inputContainer}>
                    <FontAwesome name="lock" size={24} color="black" />
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
                </View>
                <View style={{ marginTop: 20  }} >
                 <Button  color= {PRIMARY_COLOR}    screen="Recipes" > Login </Button>
                </View>
            </View>

            <View style={{ flex:1 , justifyContent:'flex-start' }} >
              <Text style={{textAlign:'center'}}>Don't have an account ? <Link screen="Signup" style={{ color:PRIMARY_COLOR,  }}> Create </Link>  </Text>
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
    flex:1,                   
    padding: 10,
    
  },
  header: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
 inputContainer: {
    flexDirection: 'row',      
    alignItems: 'center',      
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    flex:1,
    padding: 12,
  },
  icon: {
    marginRight: 8,            
  },
});
export default Login;