import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

const ProfileScreen = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Post Screen</Text>
    </View>
  );
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
  },
});

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

export default ProfileScreen;
