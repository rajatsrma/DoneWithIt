import React from "react";
import { useFormikContext } from "formik";

import AppImageInput from "../AppImageInput";
import AppErrorMessage from "./AppErrorMessage";

function AppFormImagePicker({ fieldName }) {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    touched,
    errors,
  } = useFormikContext();

  const handleDelete = (uri) => {
    setFieldValue(
      fieldName,
      values[fieldName].filter((imageUri) => imageUri !== uri)
    );
  };

  const handleAdd = (uri) => {
    setFieldValue(fieldName, [...values[fieldName], uri]);
  };
  return (
    <>
      <AppImageInput
        onBlur={() => setFieldTouched(fieldName)}
        imageUris={values[fieldName]}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
      <AppErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
    </>
  );
}

export default AppFormImagePicker;
