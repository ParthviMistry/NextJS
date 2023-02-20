import React from "react";
import { useField } from "formik";

const InputCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div>
      <label className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white ">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputCheckbox;
