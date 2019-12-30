import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { AsyncStorage } from "react-native";
import Discovery from "../components/Discovery";
import Board from "../components/Board";
import Show from "../components/Show";
import SignIn from "../components/SignIn";
import Signup from "../components/Signup";

const screens = {
  Signup: {
    screen: Signup
  },
  Signin: {
    screen: SignIn
  },
  Home: {
    screen: Discovery
  },
  Board: {
    screen: Board
  },
  Show: {
    screen: Show
  }
};

getMyValue = async () => {
  try {
    const token = await AsyncStorage.getItem("@userEmail");
    console.log(token);
  } catch (e) {
    console.log(e);
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
