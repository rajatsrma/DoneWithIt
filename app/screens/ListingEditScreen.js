import React from "react";
import * as yup from "yup";
import { StyleSheet } from "react-native";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import Screen from "../components/Screen";
import AppFormPicker from "../components/forms/AppFormPicker";

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.number().required().min(1).label("Price"),
  description: yup.string().required().min(3).label("Description"),
  category: yup.object().required().nullable().label("Category"),
});

const data = [
  { category: "Electronics", value: 1 },
  { category: "Furniture", value: 2 },
  { category: "Grooming", value: 3 },
  { category: "Sports", value: 4 },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          fieldName="title"
          placeholder="TItle"
        />
        <AppFormField
          width="40%"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          fieldName="price"
          placeholder="Price"
        />
        <AppFormPicker
          width="60%"
          data={data}
          placeholder="Category"
          fieldName="category"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          fieldName="description"
          placeholder="Description"
        />
        <AppSubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ListingEditScreen;
