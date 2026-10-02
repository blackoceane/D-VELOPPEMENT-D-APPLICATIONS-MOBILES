
import * as React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View, TextInput,Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
const PRIMARY_COLOR = '#ce22f5';

const categories = [
        {
            id: '0',
            label: 'Breakfast',
            value: 'Breakfast'
        },
        {
            id: '1',
            label: 'Lunch',
            value: 'Lunch'
        },
         {
            id: '2',
            label: 'Dinner',
            value: 'Dinner'
        }
    ];
 


function CreateRecipe({route}) {
  const navigation = useNavigation();
  const [recipeName, setRecipeName] = React.useState('');
  const [selectedId, setSelectedId] = React.useState("1");
  const [selectedHour, setSelectedHour] = React.useState("1");
  const [selectedMinute, setSelectedMinute] = React.useState("10");
  const [description, setDescription] = React.useState('');
  return (
   <View style={styles.screen}>

     <View style={styles.container}>
        <Text style={{flex:1, color: PRIMARY_COLOR, fontSize: 30, textAlign: 'center'}}>Add A Recipe</Text>
        
        <View style={{flex:0.5, alignItems: 'center' }}>
         <RadioGroup  radioButtons= { categories } layout= 'row' onPress={setSelectedId} selectedId={selectedId} />
        </View>
       
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Name"   autoCapitalize="none" value = {recipeName} onChangeText={setRecipeName}/> 
        </View>
       
        <View style={styles.pickersContainer} >
          <Text style={{ fontSize: 20 }}>Duration :</Text>
          <Picker style={styles.picker} selectedValue={selectedHour}  onValueChange={(itemValue) => setSelectedHour(itemValue)}>
            {renderHourItems()}
          </Picker>
          

          <Text style={{ fontSize: 20 }}> : </Text>
          <Picker style={styles.picker} selectedValue={selectedMinute} onValueChange={(itemValue) => setSelectedMinute(itemValue)} >
           {renderMinuteItems()}
          </Picker>
          
        </View>
         <View style={{flex:3 ,flexDirection: 'row'}}>
        <TextInput placeholder="Entrez votre description" multiline numberOfLines={4} editable  textAlignVertical="top" style={styles.descriptionInput} value={description} onChangeText={setDescription}/>
        </View>
        <View style={{ flex:0.5  , margin: 20 }} >
          <Button  title='Save Recipe' color={PRIMARY_COLOR}  onPress = {() => navigation.popTo('Recipes' , {recipeName, selectedId, selectedHour, selectedMinute, description})} />
        </View>
      
      </View>

    </View>
  );
}



function renderHourItems() {
  const items = [];
  for (let i = 1; i <= 12; i++) {
    items.push(
      <Picker.Item key={i} label={`${i} h`} value={i.toString()} />
    );
  }
  return items;
}

function renderMinuteItems() {
  const items = [];
  for (let i = 1; i <= 6; i++) {
    const minuteVal = i * 10;
    items.push(
      <Picker.Item key={minuteVal} label={`${minuteVal} min`} value={minuteVal.toString()} />
    );
  }
  return items;
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',

  },
  container: {                  
     flex:1,                
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
    flex: 0.2,    
    flexDirection: 'row', 
    alignItems: 'center',      
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    
  },

  icon: {
    marginRight: 8,            
  },
  descriptionInput: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    textAlignVertical: 'top', 
  },
  pickersContainer: {
    flex: 0.5,
    flexDirection: 'row',
alignItems: 'center',
  },

  picker: {
    flex: 1,
    height: 'auto',
    borderWidth: 0,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
});

export default CreateRecipe;







