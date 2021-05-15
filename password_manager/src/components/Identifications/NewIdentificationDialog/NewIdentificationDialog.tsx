import React from "react";
import { Grid, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";

import useStyles from "./styles";
import Input from "../../Controls/Input";
import { useForm, Form } from "../../Controls/Form";

interface IIdentificationForm {
  site: string;
  username: string;
  email: string;
  password: string;
}

const NewIdentificationDialog = (props: any) => {
  const classes = useStyles();
  const initialFValues: IIdentificationForm = { site: "", username: "", email: "", password: "" };

  const validateForm = (fieldValues = formValues) => {
    let errors = { ...formErrors };

    if ("site" in fieldValues) {
      if (fieldValues.site === "") errors.site = "This field is required.";
      else errors.site = "";
    }
    if ("password" in fieldValues) {
      if (fieldValues.password === "") errors.password = "This field is required.";
      else errors.password = "";
    }

    setFormErrors({
      ...errors,
    });

    if (fieldValues == formValues) return Object.values(errors).every((error) => error == "");
  };

  const { formValues, setFormValues, formErrors, setFormErrors, handleInputChange, resetForm } = useForm(initialFValues, true, validateForm);

  const handleDialogClose = () => {
    resetForm();
    props.onClose();
  };

  return (
    <Dialog open={props.open} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">New identification</DialogTitle>
      <Form className={classes.form} noValidate>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Input
                id="site"
                name="site"
                label="Site"
                value={formValues.site}
                autoComplete="site"
                required={true}
                fullWidth={true}
                autofocus={true}
                onChange={handleInputChange}
                error={formErrors.site}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                id="username"
                name="username"
                label="Username"
                value={formValues.username}
                autoComplete="username"
                fullWidth={true}
                onChange={handleInputChange}
                error={formErrors.username}
              />{" "}
            </Grid>
            <Grid item xs={12}>
              <Input
                id="email"
                name="email"
                label="Email"
                value={formValues.email}
                autoComplete="email"
                fullWidth={true}
                onChange={handleInputChange}
                error={formErrors.email}
              />{" "}
            </Grid>
            <Grid item xs={12}>
              <Input
                id="password"
                name="password"
                label="Password"
                value={formValues.password}
                autoComplete="password"
                required={true}
                fullWidth={true}
                onChange={handleInputChange}
                error={formErrors.password}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDialogClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
};

export default NewIdentificationDialog;
