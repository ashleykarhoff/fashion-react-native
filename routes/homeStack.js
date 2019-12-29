import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { AsyncStorage } from "react-native";
import Discovery from "../components/Discovery";
import Board from "../components/Board";
import Show from "../components/Show";
import SignIn from "../components/SignIn";
// import Signup from "../components/Signup";
// import ResetPassword from "../components/ResetPassword";

// state.userToken == null ? (
//   <>
//     <Stack.Screen name="SignIn" component={SignInScreen} />
//     <Stack.Screen name="SignUp" component={SignUpScreen} />
//     <Stack.Screen name="ResetPassword" component={ResetPassword} />
//   </>
// ) : (
//   <>
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Profile" component={ProfileScreen} />
//   </>
// );

const screens = {
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

// this.getMyValue() === null
//   ? (screens = {
//       SignIn: {
//         screen: SignIn
//       },
//       SignUp: {
//         screen: Signup
//       },
//       ResetPassword: {
//         screen: ResetPassword
//       }
//     })
//   : (screens = {
//       Home: {
//         screen: Discovery
//       },
//       Board: {
//         screen: Board
//       },
//       Show: {
//         screen: Show
//       }
//     });

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
