import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainContainer from "../Screens/Main/MainContainer";
import PostContainer from "../Screens/Post/PostContainer";
import { THEME } from "../theme";

const PostNavigator = createStackNavigator(
  {
    Main: {
      screen: MainContainer,
      navigationOptions: {
        headerShown: false,
      },
    },
    Post: {
      screen: PostContainer,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: THEME.MAIN_COLOR,
      },
      headerTintColor: "#fff",
    },
  }
);

export const AppNavigation = createAppContainer(PostNavigator);
