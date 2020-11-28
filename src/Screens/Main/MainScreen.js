import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  StatusBar,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Carousel from "react-native-snap-carousel";

import Post from "../../Components/Post";
import { THEME } from "../../theme";

import styles from "./MainStyles";

const MainScreen = ({ navigation, posts, isLoading, fetchPosts }) => {
  const goToPost = (id) => {
    navigation.navigate("Post", { postId: id });
  };

  let _carousel = null;
  const [currentSlide, setCurrentSlide] = useState(1);
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Post goToPost={goToPost} key={item.id} {...item} />
      </View>
    );
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <SafeAreaView
      style={{
        ...styles.center,
        // ...styles.window,
        backgroundColor: THEME.MAIN_COLOR,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={THEME.MAIN_COLOR} />
      {isLoading ? (
        <View style={styles.center}>
          <ActivityIndicator />
        </View>
      ) : (
        // <ScrollView style={styles.postsList}>
        //   {posts.map((item) => (
        //     <Post goToPost={goToPost} key={item.id} {...item} />
        //   ))}
        // </ScrollView>
        <>
          <View style={{ height: 300 }}>
            <Carousel
              ref={(c) => {
                _carousel = c;
              }}
              data={posts}
              renderItem={_renderItem}
              sliderWidth={Dimensions.get("window").width}
              itemWidth={Dimensions.get("window").width - 100}
              // layout={"stack"}
              // layoutCardOffset={`8`}
              layout={"tinder"}
              onSnapToItem={(index) => {
                setCurrentSlide(index + 1);
              }}
            />
          </View>
          <View>
            <Text style={styles.text}>
              {currentSlide} из {posts.length}
            </Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default MainScreen;
