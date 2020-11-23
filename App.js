import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect, Provider } from "react-redux";
import Main from "./src/Screens/Main";
import store from "./src/store";

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Main />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
