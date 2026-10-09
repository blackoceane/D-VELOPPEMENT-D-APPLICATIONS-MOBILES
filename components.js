import {
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { COLORS } from "./colors";

export function Ecran({ children, style }) {
  return <View style={styles.screen}>{children}</View>;
}
export function Container({ children, style }) {
  return <View style={styles.inputContainer}>{children}</View>;
}
export function Entete({ children, style }) {
  return <View style={styles.header}>{children}</View>;
}
export function Champ({ style, ...props }) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor="#888"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
  },
  input: {
    flex: 1,
    margin: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#ccc",
    paddingHorizontal: 20,
    margin: 20,
  },
});
