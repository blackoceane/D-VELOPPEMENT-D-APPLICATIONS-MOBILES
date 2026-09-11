
import { Button } from 'react-native';
import { StyleSheet, Text, View, TextInput,Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';


const options = [
        {
            id: '0',
            label: 'Breakfast',
            value: 0
        },
        {
            id: '1',
            label: 'Lunch',
            value: 1
        },
         {
            id: '2',
            label: 'Dinner',
            value: 2
        }
    ];
 


export default function App() {
  return (
    ///<Login />
    <CreateAccount />
   /// <CreateRecipe />
  );
}

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
        <Button title="Login"  color= '#ce22f5'   />
      </View>
      <View  style={{ marginTop: 20 , width: '80%' }}>
        <Text style={{  textAlign: 'center'}}>Don't have an account ? <Text style={{ color: '#ce22f5',  }}>Create</Text> </Text>
      </View>
    </View>
  </View>
  );
}






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

function CreateRecipe() {
  return (
   <View style={styles.screen}>
     <View style={styles.container}>
        <Text style={{ color: '#ce22f5', fontSize: 30, textAlign: 'center',  marginBottom: '20%'}}>Add A Recipe</Text>
        <View>
         <RadioGroup  radioButtons= { options } layout= 'row'/>
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Name"   autoCapitalize="none"/> 
        </View>
        <View style={styles.pickersContainer} >
            <Text style={{ fontSize: 20 , marginTop: 10}}>Duration :</Text>
          <Picker style = {styles.picker}>
              <Picker.Item label=" 1 h" value="1" />
              <Picker.Item label=" 2 h" value="2" />
              <Picker.Item label=" 3 h" value="3" />
              <Picker.Item label=" 4 h" value="4" />
              <Picker.Item label=" 5 h" value="5" />
              <Picker.Item label=" 6 h" value="6" />
              <Picker.Item label=" 7 h" value="7" />
              <Picker.Item label=" 8 h" value="8" />
              <Picker.Item label=" 9 h" value="9" />
              <Picker.Item label=" 10 h" value="10" />
              <Picker.Item label=" 11 h" value="11" />
              <Picker.Item label=" 12 h" value="12" />

          </Picker>
            <Text style={{ fontSize: 20 , marginTop: 10}}> : </Text>
            <Picker style = {styles.picker}>
              <Picker.Item label=" 10 min" value="1" />
              <Picker.Item label=" 20 min" value="2" />
              <Picker.Item label=" 30 min" value="3" />
              <Picker.Item label=" 40 min" value="4" />
              <Picker.Item label=" 50 min" value="5" />
              <Picker.Item label=" 60 min" value="6" />
        </Picker>
        
      </View>
      <TextInput placeholder="Entrez votre description" multiline numberOfLines={4} editable  textAlignVertical="top" style={styles.descriptionInput}/>
      <View style={{ margin: 10  }} >
        <Button title="Save Recipe"  color= '#ce22f5'   />
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
descriptionInput: {
  margin:20,
  width : 350,    
  height: '40%',
  borderWidth: 2,
  borderColor: '#ccc',
  borderRadius: 20,
  padding: 10,
  textAlignVertical: 'top', 
},
pickersContainer: {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
  
},
picker: {
  flex: 1,
  height: 'auto',
  borderWidth: 0,
  backgroundColor: 'white',
  marginHorizontal: 5,
 
},
});









