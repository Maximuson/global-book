import { connect } from "react-redux";
import { fetchPosts } from "../../store/actions/posts";

import MainScreen from "./MainScreen";

MainScreen.navigationOptions = {
  headerTitle: "Посты",
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  isLoading: state.posts.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (data) => {
    dispatch(fetchPosts(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
