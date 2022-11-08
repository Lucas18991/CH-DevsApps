import { React } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.HeaderTitle}> {title} </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "light blue",
    Flex: 1,
    padding: 30,
    marginTop: 50,
  },

  HeaderTitle: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});
