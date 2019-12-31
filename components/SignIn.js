import React from "react";
import { View, Text, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "react-native-gesture-handler";
import { signIn, setSession } from "../redux/actions";
import { connect } from "react-redux";
import styles from "../assets/styles";

const SigninSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required")
});

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
            <Text>Email</Text>
            {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
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
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    );
  }
}

function mapStateToProps(state) {
  return {
    session: state.session.session
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (email, password) => dispatch(signIn(email, password)),
    setSession: id => dispatch(setSession(id))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
