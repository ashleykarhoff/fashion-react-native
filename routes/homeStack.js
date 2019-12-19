import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Discovery from "../components/Discovery";
import Board from "../components/Board";
import Show from "../components/Show";

const screens = {
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

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
