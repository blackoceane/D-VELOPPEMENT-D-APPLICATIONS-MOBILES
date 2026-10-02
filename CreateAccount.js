import { StyleSheet, Text, View, TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Button } from '@react-navigation/elements';

const PRIMARY_COLOR = '#ce22f5';

 function CreateAccount() {
  return (
   <View style={styles.screen}>

     <View style={styles.container}>
       <View style={styles.header} >
         <Text style={{ color:PRIMARY_COLOR, fontSize: 30}}>Create an account</Text>
       </View>
        <View style={styles.form}>
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
        
          <View  style={{ marginTop: 20  }}>
            <Button  color= {PRIMARY_COLOR}   screen="Login"> Create Account </Button>  
          </View>
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
    justifyContent: 'center', 
    alignItems: 'center'  , 
    margin:'auto',
    padding: 20, 
  },
  
  header :{
    flex:1,
    justifyContent:'flex-end',
  },
  input: {
  width: '70%',
    height: 40,
    margin: 10,
    padding: 10,
  },
  form :{
    flex: 2,
     justifyContent:'center',
  },
  inputContainer: {
    
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