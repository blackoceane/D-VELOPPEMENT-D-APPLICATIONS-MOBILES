import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import { Link } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import colors, { PRIMARY_COLOR } from "../colors.js";
import { Ecran, Container } from "../components.js";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SEED } from "../seed.js";

function ListeRecipe({ route, navigation }) {
  const [tasks, setTasks] = React.useState(SEED);
  const sortedTasks = [...tasks].sort((a, b) => a.name.localeCompare(b.name));
  React.useEffect(() => {
    if (route.params?.recipe) {
      setTasks((prev) => {
        const existeDeja = prev.some((t) => t.id === route.params.recipe.id);
        if (existeDeja) {
          return prev;
        }

        return [...prev, route.params.recipe];
      });
    }
  }, [route.params?.recipe]);

  return (
    <Ecran>
      <View style={styles.msm}>
        <FlatList
          data={sortedTasks}
          KeyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate("RecipeDetail", { recipe: item })
              }
            >
              {({ pressed }) => (
                <View
                  style={{
                    padding: 16,
                    margin: 8,
                    borderRadius: 10,
                    backgroundColor: pressed ? PRIMARY_COLOR : "white",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ marginRight: 16 }}>
                    {iconCategory(item.category)}
                    <Text style={{ fontSize: 13, color: "gray", marginTop: 6 }}>
                      {item.durationHour} h {item.durationMinute}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      {item.name}
                    </Text>

                    <Text style={{ fontSize: 12, color: "gray", marginTop: 4 }}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              )}
            </Pressable>
          )}
          ListEmptyComponent={
            <Text
              style={{
                textAlign: "center",
                marginTop: 40,
                color: PRIMARY_COLOR,
                fontSize: 40,
              }}
            >
              NO RECIPE YET ....
            </Text>
          }
        />
      </View>
      <View style={styles.add}>
        <Link screen="Recipe" style={styles.addButton}>
          {" "}
          +
        </Link>
      </View>
    </Ecran>
  );
}
function iconCategory(category) {
  if (category == "Breakfast") {
    return <MaterialIcons name="free-breakfast" size={24} color="gray" />;
  } else if (category == "Lunch") {
    return <MaterialIcons name="lunch-dining" size={24} color="gray" />;
  } else {
    return <MaterialIcons name="dinner-dining" size={24} color="gray" />;
  }
}

const styles = StyleSheet.create({
  msm: {
    flex: 1,
  },
  add: {
    left: "80%",
    position: "absolute",
    Right: 20,
    Bottom: 20,
  },

  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 30,
    textAlign: "center",
    lineHeight: 60,
  },
});
export default ListeRecipe;
