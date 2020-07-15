import React from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppFormField from "../components/AppFormField";

const validationSchema = yup.object().shape({
  name: yup.string().required().min(3).label("Name"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(3).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <AppFormField
              autoCorrect={false}
              fieldName="name"
              iconName="human-male"
              placeholder="Name"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              fieldName="email"
              iconName="email"
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
            <AppButton title="Register" onPress={handleSubmit} />
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
