import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";

const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextField autoFocus {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default InputText;
