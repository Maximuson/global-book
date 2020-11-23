import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../Screens/MainScreen";
import PostScreen from "../Screens/PostScreen";

const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Post: {
    screen: PostScreen,
  },
});

export const AppNavigation = createAppContainer(PostNavigator);
