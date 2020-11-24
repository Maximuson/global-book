import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Post from "../Components/Post";
// import { connect } from "react-redux";
import { THEME } from "../theme";
const posts = [
  {
    id: 1,
    title: "Коротание ночей",
    text:
      "asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sada asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sada asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sadaasda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sada a sada dawdawd dadawd awdawdawd awda",
  },
  {
    id: 2,
    title: "Цель",
    text:
      "asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sada dawdawd dadawd awdawdawd awda",
  },
  {
    id: 3,
    title: "Мотивация",
    text:
      "asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sada dawdawd dadawd awdawdawd awda",
  },
  {
    id: 4,
    title: "Коротание ночей",
    text:
      "asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sada asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sada asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sadaasda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sada a sada dawdawd dadawd awdawdawd awda",
  },
  {
    id: 5,
    title: "Цель",
    text:
      "asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sada dawdawd dadawd awdawdawd awda",
  },
  {
    id: 6,
    title: "Мотивация",
    text:
      "asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sada dawdawd dadawd awdawdawd awda",
  },
];
const MainScreen = ({ navigation }) => {
  const goToPost = (id) => {
    navigation.navigate("Post", { postId: id });
  };

  return (
    <SafeAreaView
      style={{
        ...styles.center,
        ...styles.window,
        backgroundColor: THEME.MAIN_COLOR,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <ScrollView style={styles.postsList}>
        {posts.map((item) => (
          <Post goToPost={goToPost} key={item.id} {...item} />
        ))}
      </ScrollView>

      {/* <Text style={styles.text}>Main screen</Text> */}

      {/* <Button title="К посту" onPress={goToPost} /> */}
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
  window: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "roboto-black",
    fontSize: 24,
    color: "#fff",
  },
  postsList: {
    marginVertical: 20,
  },
});

export default MainScreen;
