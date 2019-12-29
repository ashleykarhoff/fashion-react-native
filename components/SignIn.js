import React from "react";
import { View, Text, Button } from "react-native";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";
import { signIn } from "../redux/actions";
import { connect } from "react-redux";
import styles from "../assets/styles";

class SignIn extends React.Component {
  render() {
    return (
      <Formik
        style={styles.container}
        initialValues={{ email: "", password: "", passwordConfirmation: "" }}
        onSubmit={values =>
          this.props.signIn(
            values.email,
            values.password,
            values.passwordConfirmation
          )
        }
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
            <Text>Password Confirmation</Text>
            <TextInput
              style={{ backgroundColor: "#ededed", height: 30 }}
              onChangeText={handleChange("passwordConfirmation")}
              onBlur={handleBlur("passwordConfirmation")}
              value={values.passwordConfirmation}
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (email, password, passwordConfirmation) =>
      dispatch(signIn(email, password, passwordConfirmation))
  };
}
export default connect(null, mapDispatchToProps)(SignIn);
