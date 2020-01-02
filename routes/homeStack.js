import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Discovery from "../components/Discovery";
import Board from "../components/Board";
import Show from "../components/Show";
import SignIn from "../components/SignIn";
import Signup from "../components/Signup";
import { styles, colors } from "../assets/styles";

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
    screen: Discovery,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: colors.navy
      },
      headerTintColor: colors.white
    })
  },
  Board: {
    screen: Board,
    navigationOptions: () => ({
      title: `Board`,
      headerStyle: {
        backgroundColor: colors.navy
      },
      headerTintColor: colors.white
    })
  },
  Show: {
    screen: Show,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: colors.navy
      }
    })
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
