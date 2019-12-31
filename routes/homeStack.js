import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Discovery from "../components/Discovery";
import Board from "../components/Board";
import Show from "../components/Show";
import SignIn from "../components/SignIn";
import Signup from "../components/Signup";

const AuthStack = createStackNavigator({
  Signup: {
    screen: Signup,
    navigationOptions: () => ({
      title: `Create Account`
    })
  },
  Signin: {
    screen: SignIn,
    navigationOptions: () => ({
      title: `Sign in`
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
