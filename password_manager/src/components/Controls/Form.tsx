import { useState } from "react";
import { Box } from "@material-ui/core";

export function useForm(initialFValues: any, validateOnChange: boolean = false, validateForm: (fieldValues: any) => any) {
  const initError = () => {
    let errors = { ...initialFValues };
    for (let idx in initialFValues) {
      errors[idx] = "";
    }
    return errors;
  };

  const [formValues, setFormValues] = useState(initialFValues);
  const [formErrors, setFormErrors] = useState(initError());

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    if (validateOnChange) validateForm({ [name]: value });
  };

  const handleInputChange2 = (e: any, newValue: any) => {
    if (!e) return;
    const { name } = e.target;
    setFormValues({
      ...formValues,
      [name]: newValue,
    });
    if (validateOnChange) validateForm({ [name]: newValue });
  };

  const resetForm = () => {
    setFormValues(initialFValues);
    setFormErrors({});
  };

  return {
    formValues,
    setFormValues,
    formErrors,
    setFormErrors,
    handleInputChange,
    handleInputChange2,
    resetForm,
  };
}

export function Form(props: any) {
  const { children, ...other } = props;
  return (
    <Box component="form" noValidate {...other}>
      {props.children}
    </Box>
  );
}
