import React from "react";
import { createAccount } from "../redux/actions";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(6, "Too short!")
    .max(25, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    // needs to match password
    .required("Required")
});

class Signup extends React.Component {
  componentDidUpdate() {
    if (this.props.session) {
      this.props.navigation.navigate("Home");
    }
  }

  render() {
    return (
      <Formik
        onSubmit={data => this.props.createAccount(data)}
        validationSchema={SignupSchema}
        initialValues={{
          firstName: "",
          email: "",
          password: "",
          passwordConfirmation: ""
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched
        }) => (
          <View>
            <Text>Create Account</Text>
            <Text>First Name</Text>
            {errors.firstName && touched.firstName ? (
              <Text>{errors.firstName}</Text>
            ) : null}
            <TextInput
              style={{ backgroundColor: "#ededed", height: 30 }}
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              value={values.firstName}
            />
            <Text>Email</Text>
            {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
            {this.props.emailTaken ? <Text>Email is taken</Text> : null}
            <TextInput
              style={{ backgroundColor: "#ededed", height: 30 }}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <Text>Password</Text>
            {errors.password && touched.password ? (
              <Text>{errors.password}</Text>
            ) : null}
            <TextInput
              style={{ backgroundColor: "#ededed", height: 30 }}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />
            <Text>Confirm Password</Text>
            {errors.passwordConfirmation && touched.passwordConfirmation ? (
              <Text>{errors.passwordConfirmation}</Text>
            ) : null}
            <TextInput
              style={{ backgroundColor: "#ededed", height: 30 }}
              onChangeText={handleChange("passwordConfirmation")}
              onBlur={handleBlur("passwordConfirmation")}
              value={values.passwordConfirmation}
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Submit" />
            <Button
              onPress={() => this.props.navigation.navigate("Signin")}
              title="Signin"
            />
          </View>
        )}
      </Formik>
    );
  }
}

function mapStateToProps(state) {
  return {
    session: state.session.session,
    emailTaken: state.session.emailTaken
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createAccount: data => dispatch(createAccount(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
