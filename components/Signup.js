import React from "react";
import { createAccount } from "../redux/actions";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Formik } from "formik";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { styles, colors } from "../assets/styles";
import { SignupSchema } from "../validations/validation";

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
            <View style={styles.formHeaderContainer}>
              <Text style={styles.formHeader}>Create new account</Text>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.formTextContainer}>
                {errors.firstName && touched.firstName ? (
                  <Text style={styles.formTextError}>
                    {" "}
                    * {errors.firstName}
                  </Text>
                ) : null}
                <TextInput
                  style={styles.formTextInput}
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                  placeholder="First name"
                  placeholderTextColor={colors.grey}
                />
              </View>
              <View style={styles.formTextContainer}>
                {errors.email && touched.email ? (
                  <Text style={styles.formTextError}> * {errors.email}</Text>
                ) : null}
                {this.props.emailTaken ? <Text>Email is taken</Text> : null}
                <TextInput
                  style={styles.formTextInput}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="Email"
                  placeholderTextColor="#505050"
                />
              </View>
              <View style={styles.formTextContainer}>
                {errors.password && touched.password ? (
                  <Text style={styles.formTextError}> * {errors.password}</Text>
                ) : null}
                <TextInput
                  style={styles.formTextInput}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder="Password"
                  placeholderTextColor="#505050"
                  secureTextEntry
                />
              </View>
              <View style={styles.formTextContainer}>
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <Text style={styles.formTextError}>
                    {" "}
                    * {errors.passwordConfirmation}
                  </Text>
                ) : null}
                <TextInput
                  style={styles.formTextInput}
                  onChangeText={handleChange("passwordConfirmation")}
                  onBlur={handleBlur("passwordConfirmation")}
                  value={values.passwordConfirmation}
                  placeholder="Confirm Password"
                  placeholderTextColor="#505050"
                  secureTextEntry
                />
              </View>
              <TouchableOpacity
                style={styles.formPrimaryBtn}
                onPress={handleSubmit}
              >
                <Text style={styles.formPrimaryBtnText}>Create Account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.formSecondaryBtn}
                onPress={() => this.props.navigation.navigate("Signin")}
              >
                <Text style={styles.formSecondaryBtnText}>Sign in</Text>
              </TouchableOpacity>
            </View>
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
