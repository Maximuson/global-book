import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar } from "react-native";
import { connect } from "react-redux";

const PostScreen = () => {
  return (
    <SafeAreaView style={{ ...styles.center, backgroundColor: "#fff" }}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

      <Text style={styles.text}>Post Screen</Text>
    </SafeAreaView>
  );
};

PostScreen.navigationOptions = {
  headerTitle: "Пост номер 1",
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
    color: "#6a51ae",
  },
});

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);

export default PostScreen;
