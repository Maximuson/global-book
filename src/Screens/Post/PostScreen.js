import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  ActivityIndicator,
  View,
} from "react-native";

import styles from "./PostStyles";

const PostScreen = ({ navigation, post, isPostLoading, getPost }) => {
  const { params } = navigation.state;

  useEffect(() => {
    getPost({ id: params.postId });
  }, []);

  return (
    <SafeAreaView
      style={{
        ...styles.wrapper,
        ...styles.container,
        backgroundColor: "#fff",
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      {isPostLoading ? (
        <View style={styles.center}>
          <ActivityIndicator />
        </View>
      ) : (
        <>
          <Text style={styles.text}>Post {post.id}</Text>
          <Text>{post.text}</Text>
        </>
      )}
    </SafeAreaView>
  );
};

export default PostScreen;
