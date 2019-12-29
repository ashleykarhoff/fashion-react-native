import React from "react";
import { AsyncStorage } from "react-native";
import { View, Text, Button } from "react-native";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";
import styles from "../assets/styles";

class SignIn extends React.Component {
  //   _storeData = async key => {
  //     try {
  //       const value = await AsyncStorage.setItem("@MySuperStore:key", key.email);
  //       console.log(value);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //     _retrieveData = async () => {
  //       try {
  //         const key = await AsyncStorage.getItem("@userKey");
  //         if (key !== null) {
  //           this._storeData(key);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  render() {
    return (
      <Formik
        style={styles.container}
        initialValues={{ email: "", password: "" }}
        onSubmit={values => values}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text>Signin</Text>
            <Text>Email</Text>
            <TextInput
              style={{ backgroundColor: "#ededed", height: 30 }}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <Text>Password</Text>
            <TextInput
              style={{ backgroundColor: "#ededed", height: 30 }}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    );
  }
}

export default SignIn;
