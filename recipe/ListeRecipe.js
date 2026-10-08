
import { StyleSheet, Text, View, TextInput,Pressable, Button} from 'react-native';
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import colors, { PRIMARY_COLOR } from '../colors.js';
import { Ecran, } from '../components.js';

function ListeRecipe({route, navigation}) {
      const [tasks, setTasks] = React.useState([]);
      React.useEffect(() => {
    if (route.params?.recipeName) {
      setTasks((prev) => [
        ...prev,
        { name: route.params.recipeName, period: route.params.selectedId, hour: route.params.selectedHour, minute: route.params.selectedMinute, description: route.params.description },
      ]);
    }
  }, [route.params?.recipeName, route.params?.selectedId, route.params?.selectedHour, route.params?.selectedMinute, route.params?.description]);
  return (
       <Ecran>
                {tasks.length === 0 && ( <View style={styles.msm}>
                   <Text style={{ color: PRIMARY_COLOR, fontSize: 20, textAlign: 'center' }}>LIST EMPTY </Text>
                </View>)}
                <View style={{ flex: 2, padding: 20 , justifyContent:'center', alignItems:'center'}}>
                    {tasks.map((t, i) => 
                        (<Text key={i}>
                         LE NOM : {t.name}  La periode : ({t.period}) - {t.hour}h {t.minute}min  la description : {t.description}</Text>
                       ))
                 }
                </View>
                <View style={styles.add}>
                     <Link screen="Recipe" style={styles.addButton} > +</Link>
                </View>
                 <View style={styles.add}>
                     <Link screen="Recipe" style={styles.addButton} >*</Link>
                </View>
            </Ecran>
    );
}

const styles = StyleSheet.create({
    
    msm:{
       flex:2,
       justifyContent:'center',
       alignItems:'center',
    },
    add: {
        alignItems: 'flex-start',
        paddingBottom: 15,
        left:'80%',   
    },

   addButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 60,
    },

   

});
export default ListeRecipe;