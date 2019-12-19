import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Discovery from "../components/Discovery";
import Board from "../components/Board";

const screens = {
  Home: {
    screen: Discovery
  },
  Board: {
    screen: Board
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
