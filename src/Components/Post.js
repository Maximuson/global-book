import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Dimensions, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Post = ({ id, title, text, goToPost }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatedText = (text) => {
    return text.length > 150 ? `${text.slice(0, 150)}...` : text;
  };
  // useEffect(() => {}, [isOpen]);
  return (
    <View style={styles.itemContainer}>
      <View style={[styles.item, !isOpen && { maxHeight: 140 }]}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.smallText}>Локально</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setIsOpen(!isOpen);
            console.log("press");
          }}
          onLongPress={() => {
            goToPost(id);
          }}
        >
          <View>
            <Text style={styles.mainText}>
              {isOpen ? text : formatedText(text)}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Button
            onPress={() => {
              goToPost(id);
            }}
            title="Открыть пост"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 20,
    borderRadius: 20,
  },
  item: {
    // height: 150,
    width:
      Dimensions.get("window").width - Dimensions.get("window").width * 0.1,

    padding: 15,
    // flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#3f3f3f",
    borderRadius: 15,
    overflow: "hidden",
  },
  topContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  bottomContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontFamily: "roboto-black",
    color: "#F2F2F0",
  },
  mainText: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    color: "#F2F2F0",
  },
  smallText: {
    fontSize: 11,
    fontFamily: "roboto-thin",
    color: "#fff",
  },
});
export default Post;
