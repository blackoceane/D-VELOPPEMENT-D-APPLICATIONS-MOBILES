
import { StyleSheet, Text, View, TextInput,Pressable} from 'react-native';

function ListeRecipe() {
  return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={{ color: '#ce22f5', fontSize: 90, textAlign: 'center',  marginBottom: '20%'}}>RECIPES LIST</Text>
                <Text style={{ color: '#ce22f5', fontSize: 10, textAlign: 'center',  marginTop: '40%'}}> LIST EMPTY</Text>
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
});
export default ListeRecipe;