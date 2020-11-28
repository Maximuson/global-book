import React, { useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StatusBar,
  View,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Post from "../../Components/Post";
import { THEME } from "../../theme";

import styles from "./MainStyles";

const MainScreen = ({ navigation, posts, isLoading, fetchPosts }) => {
  const goToPost = (id) => {
    navigation.navigate("Post", { postId: id });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <SafeAreaView
      style={{
        ...styles.center,
        ...styles.window,
        backgroundColor: THEME.MAIN_COLOR,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={THEME.MAIN_COLOR} />
      {isLoading ? (
        <View style={styles.center}>
          <ActivityIndicator />
        </View>
      ) : (
        <ScrollView style={styles.postsList}>
          {posts.map((item) => (
            <Post goToPost={goToPost} key={item.id} {...item} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default MainScreen;
