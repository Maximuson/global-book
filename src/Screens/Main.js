import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Main screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
