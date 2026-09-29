
import { StyleSheet, Text, View, TextInput,Pressable} from 'react-native';

function ListeRecipe() {
  return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.msm}>
                <Text style={{ color: '#ce22f5', fontSize: 20, textAlign: 'center'}}> LIST EMPTY</Text>
                </View>
                <View style={styles.add}>

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
    msm:{
       flex:1,
       justifyContent:'center',
    },
    add:{
       flex:1,
       justifyContent:'flex-end',

    }
});
export default ListeRecipe;