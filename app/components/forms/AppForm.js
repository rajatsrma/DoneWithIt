import React from "react";
import { Formik } from "formik";

function AppForm({ children, validationSchema, onSubmit, initialValues }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
