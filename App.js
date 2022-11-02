import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemcontainer}>
        <Text>Open up </Text>
        <TextInput
          placeholder="Agregar item a la lista"
          style={styles.textinput}
        />
        <Button title="Agregar"></Button>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    Flex: 1,
    padding: 30,
    marginTop: 50,
  },

  itemcontainer: {
    backgroundColor: "grey",
    Flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  textinput: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});
