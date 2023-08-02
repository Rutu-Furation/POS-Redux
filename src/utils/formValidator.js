// useFormValidator.js
import { useState } from "react";
import * as yup from "yup";

const useFormValidator = (formData, validationSchema) => {
  //   const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    try {
      validationSchema.validateSync(formData, { abortEarly: false });
      setErrors({});
      return null; // Form data is valid
    } catch (validationErrors) {
      const errorMessages = {};
      validationErrors.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });
      setErrors(errorMessages);
      return errors; // Return the validation errors
    }
  };

  return { errors, validateForm };
};

export default useFormValidator;
