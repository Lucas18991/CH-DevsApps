import {
  StyleSheet,
  Text,
  View,
  Modal as NewModal,
  Pressable,
} from "react-native";
import React from "react";
const Modal = (props) => {
  const { isVisible } = props;
  return (
    <NewModal
      animationType="fade"
      transparent={true}
      visible={modaVisible}
      onRequestClose={() => {
        Alert.alert("Modal fue cerrado");
        setModaVisible(!modalVisible);
      }}
    >
      <View style={StyleSheet.centeredView}>
        <View style={{ backgroundColor: "white" }}>
          <Text>Queres eliminar este elemento ?</Text>
          <Pressable onPress={() => deleteItem()} style={{ backgroundColor }}>
            <Text style={styles.textStyle}>eliminar</Text>
          </Pressable>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const Styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
