import React from "react";
import { View, Text, Button } from "react-native";
import { Formik } from "formik";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { signIn, setSession } from "../redux/actions";
import { connect } from "react-redux";
import { styles, colors } from "../assets/styles";
import { SigninSchema } from "../validations/validation";

class SignIn extends React.Component {
  componentDidMount() {
    if (this.props.session) {
      this.props.navigation.navigate("Home");
    }
  }

  componentDidUpdate() {
    if (this.props.session) {
      this.props.navigation.navigate("Home");
    }
  }

  render() {
    return (
      <Formik
        validationSchema={SigninSchema}
        style={styles.container}
        initialValues={{ email: "", password: "" }}
        onSubmit={values => this.props.signIn(values.email, values.password)}
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
              <Text style={styles.formHeader}>Sign in</Text>
            </View>
            <View style={styles.formContainer}>
              <View>
                <View style={styles.formTextContainer}>
                  {this.props.signInError ? (
                    <Text style={styles.formTextError}>
                      {" "}
                      * Email and password do not match
                    </Text>
                  ) : null}
                  {errors.email && touched.email ? (
                    <Text style={styles.formTextError}> * {errors.email}</Text>
                  ) : null}
                  <TextInput
                    style={styles.formTextInput}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="Email"
                    placeholderTextColor={colors.navy}
                  />
                </View>
                <View style={styles.formTextContainer}>
                  {errors.password && touched.password ? (
                    <Text style={styles.formTextError}>
                      {" "}
                      * {errors.password}
                    </Text>
                  ) : null}
                  <TextInput
                    style={styles.formTextInput}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholder="Password"
                    placeholderTextColor={colors.navy}
                    secureTextEntry
                  />
                </View>
                <TouchableOpacity
                  style={styles.formPrimaryBtn}
                  onPress={handleSubmit}
                >
                  <Text style={styles.formPrimaryBtnText}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.formSecondaryBtn}
                  onPress={() => this.props.navigation.navigate("Signup")}
                >
                  <Text style={styles.formSecondaryBtnText}>
                    Create new account
                  </Text>
                </TouchableOpacity>
              </View>
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
    signInError: state.session.signInError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (email, password) => dispatch(signIn(email, password)),
    setSession: id => dispatch(setSession(id))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
