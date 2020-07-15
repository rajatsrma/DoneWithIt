import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppErrorMessage from "../components/AppErrorMessage";
import AppFormField from "../components/AppFormField";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              fieldName="email"
              iconName="email"
              keyboardType="email-address"
              placeholder="Email"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              fieldName="password"
              iconName="lock-outline"
              placeholder="Password"
              secureTextEntry={true}
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;