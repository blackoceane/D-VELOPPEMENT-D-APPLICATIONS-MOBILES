import { Button } from 'react-native';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';



 function CreateAccount() {
  return (
   <View style={styles.screen}>

     <View style={styles.container}>
        <Text style={{ color: '#ce22f5', fontSize: 30, textAlign: 'center',  marginBottom: '15%'}}>Create an account</Text>
        
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Username"  autoCapitalize="none"/>
        </View>
        
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        </View>
        
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
        </View>
        
        <View  style={{ marginTop: 20, width: '80%' }}>
          <Button title="Create Account" color= '#ce22f5' />
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


export default CreateAccount;