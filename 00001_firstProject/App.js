import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [text, setText] = useState("Hey there!");

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Change text" onPress={() => setText("Hello world!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // justifyContent: "flex-start",
  },
});
