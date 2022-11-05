import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { useState } from "react";
import Modal from "./componentes/modal";

export default function App() {
  const [textItem, setTextItem] = useState("");

  const [itemList, setItemList] = useState([]);

  const [modaVisible, setModaVisible] = useState([false]);

  const [itemSelected, setItemSelected] = useState([]);

  const [modalVisible, setmodalVisible] = useState([]);

  const onHandleChangeItem = (t) => {
    setTextItem(t);
  };

  const additem = () => {
    setItemList((currentItems) => [
      ...currentItems,
      { id: Math.random().toString(), value: textItem },
    ]);
    setTextItem("");
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
    /*
    <View style={styles.items}>
      <Text>{item.value}</Text>
      <Button title="Eliminar"></Button>
      </View>
  */
  );

  const selectedItem = (id) => {
    setItemSelected(list.filter((item) => item.id === id)[0]);
    setModaVisible(true);
  };
  const deleteItem = () => {
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModaVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>shopping list </Text>
      <TextInput
        placeholder="Agregar item a la lista"
        style={styles.textinput}
        value={textItem}
        onChangeText={onHandleChangeItem}
      />
      <Button title="Agregar" onPress={additem}></Button>
      <View style={styles.itemcontainer}>
        <View>
          <FlatList
            data={itemList}
            renderItem={renderItem}
            keyExtractor={(item) => item.value}
          />
        </View>
        <Modal isVisible={modalVisible} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "light blue",
    Flex: 1,
    padding: 30,
    marginTop: 50,
  },

  itemcontainer: {
    backgroundColor: "grey",
    Flex: 2,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  items: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});

/*   <View style={styles.items}>
{itemList.map((item) => (
  <View style={styles.items}>
    <Text> {item.value}</Text>
  </View>
))}
</View> */
