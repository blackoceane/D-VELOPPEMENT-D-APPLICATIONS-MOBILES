import { Text } from "react-native";
import { Ecran } from "../components.js";

function RecipeDetail({ route }) {
  const recipe = route.params.recipe;

  return (
    <Ecran>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>{recipe.name}</Text>
      <Text>{recipe.description}</Text>
      <Text>
        {recipe.durationHour} h {recipe.durationMinute} min
      </Text>
      <Text>{recipe.category}</Text>
    </Ecran>
  );
}

export default RecipeDetail;
