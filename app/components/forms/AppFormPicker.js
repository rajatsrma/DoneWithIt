import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import AppErrorMessage from "../forms/AppErrorMessage";

function AppFormPicker({ data, placeholder, fieldName, width }) {
  const { errors, setFieldValue, values, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        onSelectItem={(item) => {
          setFieldValue(fieldName, item);
        }}
        items={data}
        placeholder={placeholder}
        selectedItem={values[fieldName]}
        width={width}
      />
      <AppErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
    </>
  );
}

export default AppFormPicker;
