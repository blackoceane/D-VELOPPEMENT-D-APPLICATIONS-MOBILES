import { StyleSheet, Text, View, TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons.js';
import FontAwesome from '@expo/vector-icons/FontAwesome.js';
import { Button } from '@react-navigation/elements';
import colors, { PRIMARY_COLOR } from '../colors.js';
import { Ecran,Champ,Container,Entete } from '../components.js';

 function CreateAccount() {
  return (
   <Ecran>
       <Entete>
         <Text style={{ color: PRIMARY_COLOR, fontSize: 30 }}>Create an account</Text>
       </Entete>
        <View style={styles.form}>
          <Container>
            <Ionicons name="person" size={24} color="black" />
            <Champ placeholder="Username"  autoCapitalize="none"/>
          </Container>
        
          <Container>
            <FontAwesome name="lock" size={24} color="black" />
            <Champ placeholder="Password" secureTextEntry={true} />
          </Container>
        
          <Container>
            <FontAwesome name="lock" size={24} color="black" />
            <Champ placeholder="Confirm Password" secureTextEntry={true} />
          </Container>
         </View>
           <View style={{ flex:1 , justifyContent:'flex-start' }} >
            <Button  color= {PRIMARY_COLOR}   screen="Login"> Create Account </Button>  
          </View>
     
   </Ecran>
     
  );
}
const styles = StyleSheet.create({
 
  form :{
    flex: 2,
     justifyContent:'center',
    
  },
  icon: {
    marginRight: 8,            
  },
});

export default CreateAccount;