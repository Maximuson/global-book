import React from "react";

import { connect } from "react-redux";
import { getPost } from "../../store/actions/posts";

import PostScreen from "./PostScreen";

const mapStateToProps = (state) => ({
  post: state.posts.post,
  isPostLoading: state.posts.isPostLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (data) => {
    dispatch(getPost(data));
  },
});

PostScreen.navigationOptions = ({ navigation }) => {
  const { params } = navigation.state;
  return {
    headerTitle: `Пост ${params.postId}`,
    title: <PostScreen />,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
