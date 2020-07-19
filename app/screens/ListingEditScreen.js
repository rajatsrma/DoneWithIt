import React, { useState } from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  FormField as Field,
  Form,
  FormImagePicker as ImagePicker,
  FormPicker as Picker,
  SubmitButton as Submit,
} from "../components/form";
import { CategoryPickerItem } from "../components/pickers";
import categories from "../config/categories.json";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please select at least one image"),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.string().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

export default function ListingEditScreen() {
  const location = useLocation();

  const handleSubmit = async (listing) => {
    const result = await listingsApi.addListing({ ...listing, location });

    if (!result.ok) return alert("Could not save the listing");
    return alert("success");
  };

  return (
    <Screen>
      <Form
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ImagePicker name="images" />
        <Field maxLength={255} name="title" placeholder="Title" />
        <Field
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width="30%"
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <Field
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <Submit title="Post" />
      </Form>
    </Screen>
  );
}
