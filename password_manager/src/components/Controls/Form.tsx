import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";

export function useForm(initialFValues: any, validateOnChange: boolean = false, validateForm: (fieldValues: any) => any) {
  const initError = () => {
    let res = { ...initialFValues };
    for (let key in initialFValues) {
      res[key] = "";
    }
    return res;
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
