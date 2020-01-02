import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Discovery from "../components/Discovery";
import Board from "../components/Board";
import Show from "../components/Show";
import SignIn from "../components/SignIn";
import Signup from "../components/Signup";
import { styles } from "../assets/styles";

const AuthStack = createStackNavigator({
  Signin: {
    screen: SignIn,
    navigationOptions: () => ({
      headerStyle: styles.formNav
    })
  },
  Signup: {
    screen: Signup,
    navigationOptions: () => ({
      headerStyle: styles.formNav
    })
  }
});

const AppStack = createStackNavigator({
  Home: {
    screen: Discovery
  },
  Board: {
    screen: Board,
    navigationOptions: () => ({
      title: `Board`
    })
  },
  Show: {
    screen: Show
  }
});

const App = createSwitchNavigator({
  AuthStack: {
    screen: AuthStack
  },
  AppStack: {
    screen: AppStack
  }
});

export default createAppContainer(App);
