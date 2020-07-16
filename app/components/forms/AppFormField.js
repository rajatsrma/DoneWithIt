import React from "react";
import AppTextInput from "../AppTextInput";
import AppErrorMessage from "./AppErrorMessage";
import { useFormikContext } from "formik";

function AppFormField({ width, fieldName, ...otherProps }) {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        onBlur={() => setFieldTouched(fieldName)}
        onChangeText={handleChange(fieldName)}
        {...otherProps}
      />
      <AppErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
    </>
  );
}

export default AppFormField;
