import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { connect } from "react-redux";
import { THEME } from "../theme";

const MainScreen = ({ navigation }) => {
  const goToPost = () => {
    navigation.navigate("Post");
  };

  return (
    <SafeAreaView
      style={{ ...styles.center, backgroundColor: THEME.MAIN_COLOR }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text style={styles.text}>Main screen</Text>

      <Button title="К посту" onPress={goToPost} />
    </SafeAreaView>
  );
};

MainScreen.navigationOptions = {
  headerTitle: "Дневник",
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontFamily: "roboto-black",
    fontSize: 24,
    color: "#fff",
  },
});

export default MainScreen;
