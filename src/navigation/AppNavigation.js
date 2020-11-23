import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../Screens/MainScreen";
import PostScreen from "../Screens/PostScreen";
import { THEME } from "../theme";

const PostNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Post: {
      screen: PostScreen,
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
