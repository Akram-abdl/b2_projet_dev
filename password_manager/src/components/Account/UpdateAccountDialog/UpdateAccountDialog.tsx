import React from "react";
import { Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";

import IUser from "../../../models/user";
import useStyles from "./styles";
import { Input } from "../../Controls/Input";
import { useForm, Form } from "../../Controls/Form";
import { useDispatch } from "react-redux";

interface IProps {
  user: IUser;
  open: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateAccountDialog = ({ user, open, setDialogOpen }: IProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialFValues = {
    name: user.name,
    email: user.email,
  };

  const validateForm = (fieldValues = formValues) => {
    let errors = { ...formErrors };

    if ("site" in fieldValues) {
      if (fieldValues.name === "") errors.name = "This field is required.";
      else errors.name = "";
    }
    if ("password" in fieldValues) {
      if (fieldValues.email === "") errors.email = "This field is required.";
      else errors.email = "";
    }

    setFormErrors({
      ...errors,
    });

    if (fieldValues === formValues) return Object.values(errors).every((error) => error === "");
  };

  const { formValues, setFormValues, formErrors, setFormErrors, handleInputChange, resetForm } = useForm(initialFValues, true, validateForm);

  const handleDialogClose = (e: React.MouseEvent<any>) => {
    e.preventDefault();

    setDialogOpen(false);
    resetForm();
  };

  const handleDialogSubmit = (e: React.MouseEvent<any>) => {
    e.preventDefault();

    if (validateForm()) {
      // dispatch(updateUser({ ...formValues }));

      setDialogOpen(false);
      resetForm();
    }
  };

  return (
    <Dialog open={open} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Update user</DialogTitle>
      <Form className={classes.form} noValidate>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                id="name"
                name="name"
                label="Name"
                value={formValues.name}
                autoComplete="name"
                required={true}
                fullWidth={true}
                autofocus={true}
                onChange={handleInputChange}
                error={formErrors.name}
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
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDialogSubmit} color="primary">
            Update
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
};

export default UpdateAccountDialog;
