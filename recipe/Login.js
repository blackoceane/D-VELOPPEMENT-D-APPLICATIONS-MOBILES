import { StyleSheet,Text, View, TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import colors, { PRIMARY_COLOR } from '../colors.js';
import { Ecran,Container,Champ,Entete } from '../components.js';

function Login() {
  return (
    <Ecran>
        
            <Entete>
              <Text style={{ color: PRIMARY_COLOR, fontSize: 90, textAlign: 'center' , }}>Hello World</Text>
            </Entete>

            <View style ={{ flex: 2, justifyContent:'center' , }} >
                <Container>
                    <Ionicons name="person" size={24} color="black" />
                    
                    <Champ placeholder="Username" autoCapitalize="none" />
                </Container>

                <Container>
                    <FontAwesome name="lock" size={24} color="black" />
                    <Champ placeholder="Password" secureTextEntry={true} />
                </Container>
                <View style={{ marginTop: 20  }} >
                 <Button  color= {PRIMARY_COLOR}    screen="Recipes" > Login </Button>
                </View>
            </View>

            <View style={{ flex:1 , justifyContent:'flex-start' }} >
              <Text style={{textAlign:'center'}}>Don't have an account ? <Link screen="Signup" style={{ color:PRIMARY_COLOR,  }}> Create </Link>  </Text>
            </View>
      

    </Ecran>
  );
}


const styles = StyleSheet.create({
 
  

 
  icon: {
    marginRight: 8,            
  },
});
export default Login;