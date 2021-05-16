import React from "react";
import { Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";

import useStyles from "./styles";
import Input from "../../Controls/Input";
import { useForm, Form } from "../../Controls/Form";
import { useDispatch } from "react-redux";
import { updateIdentification, createIdentification } from "../../../actions/identifications";
import IIdentification from "../../../models/identification";

const NewIdentificationDialog = (props: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialFValues: IIdentification = { site: "", username: "", email: "", password: "" };

  const validateForm = (fieldValues: IIdentification = formValues) => {
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

  const handleDialogClose = (e: React.MouseEvent<any>) => {
    e.preventDefault();

    resetForm();
    props.setDialogOpen(false);
  };

  const handleDialogSubmit = (e: React.MouseEvent<any>) => {
    e.preventDefault();

    if (validateForm()) {
      if (props.currentIdentification) {
        dispatch(updateIdentification(props.currentIdentification._id, formValues));
      } else {
        dispatch(createIdentification(formValues));
      }
      props.setDialogOpen(false);
    }
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
              />
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
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="password"
                name="password"
                label="Password"
                type="password"
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
          <Button onClick={handleDialogSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
};

export default NewIdentificationDialog;
