import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateRecipe from "./recipe/CreateRecipe.js";
import CreateAccount from "./recipe/CreateAccount.js";
import Details from "./recipe/details.js";
import Login from "./recipe/Login.js";
import ListeRecipe from "./recipe/ListeRecipe.js";
import { TouchableOpacity, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import colors, { PRIMARY_COLOR } from "./colors.js";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerStyle: { backgroundColor: PRIMARY_COLOR },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Recipe" component={CreateRecipe} />
            <Stack.Screen name="Signup" component={CreateAccount} />
            <Stack.Screen
              name="Recipes"
              component={ListeRecipe}
              options={({ navigation }) => ({
                headerBackVisible: false,
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.reset({
                        index: 0,
                        routes: [{ name: "Login" }],
                      })
                    }
                  >
                    <Text style={{ fontSize: 20, color: "white" }}>
                      Log out
                    </Text>
                  </TouchableOpacity>
                ),
              })}
            />
             <Stack.Screen name="RecipeDetail" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
