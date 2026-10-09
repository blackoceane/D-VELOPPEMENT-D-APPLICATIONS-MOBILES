
import * as React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View, TextInput,Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons.js';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import colors, { PRIMARY_COLOR } from '../colors.js';
import { Ecran,Champ,Container } from '../components.js';

function CreateRecipe({navigation}) {


 
  const [recipeName, setRecipeName] = React.useState('');
  const [selectedId, setSelectedId] = React.useState('Lunch');
  const [selectedHour, setSelectedHour] = React.useState('0');
  const [selectedMinute, setSelectedMinute] = React.useState('00');
  const [description, setDescription] = React.useState('');
  const peutSauvegarder = recipeName.trim() !== '' && description.trim() !== '';
  function handleSave() {
    navigation.popTo('Recipes', {
      recipeName: recipeName.trim(),
      selectedId,
      selectedHour,
      selectedMinute,
      description: description.trim(),
    });
  }
  return (
   <Ecran>
    <Text style={{flex:1, color: PRIMARY_COLOR, fontSize: 30, textAlign: 'center'}}>Add A Recipe</Text>
    <View style={{ flex: 0.5, alignItems: 'center' }}>
      <RadioGroup
        radioButtons={['Breakfast', 'Lunch', 'Dinner'].map((nom) => ({id: nom,label: nom,}))}
        layout="row"
        onPress={setSelectedId}
        selectedId={selectedId}
      />
    </View>
    <Container >
      <Ionicons name="person" size={24} color="black" />
      <Champ placeholder="Name " autoCapitalize="none" value={recipeName} onChangeText={setRecipeName} />
    </Container>
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
      <Champ style={styles.descriptionInput} placeholder ="Entrer uneDescription" multiline numberOfLines={4} editable  textAlignVertical="top" value={description} onChangeText={setDescription}/>
    </View>
    <View style={{ flex:0.5  , margin: 20 }} >
      <Button  title='Save Recipe' color={PRIMARY_COLOR}  onPress={handleSave} disabled={!peutSauvegarder}  />
    </View>
   </Ecran>
  );
}


function renderHourItems() {
  const items = [];
  for (let i = 0; i <= 12; i++) {
    items.push(
      <Picker.Item key={i} label={`${i} h`} value={i.toString()} />
    );
  }
  return items;
}

function renderMinuteItems() {
  const items = [];
  for (let i = 0; i <= 6; i++) {
    const minuteVal = i * 10;
    items.push(
      <Picker.Item key={minuteVal} label={`${minuteVal} min`} value={minuteVal.toString()} />
    );
  }
  return items;
}


const styles = StyleSheet.create({
 
 
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







