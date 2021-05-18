import React, { useState } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import IUser from "../../models/user";
import UpdateAccountDialog from "./UpdateAccountDialog/UpdateAccountDialog";

import useStyles from "./styles";

interface IProps {
  user: IUser;
}

const Account = ({ user }: IProps) => {
  const classes = useStyles();

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClickDialogOpen = (e: React.MouseEvent<any>) => {
    e.preventDefault();

    setDialogOpen(true);
  };

  return (
    <Box>
      <Typography variant="h1">Account</Typography>
      <Typography>Name: {user.name}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Button variant="outlined" color="primary" onClick={handleClickDialogOpen}>
        Update
      </Button>
      <UpdateAccountDialog user={user} open={dialogOpen} setDialogOpen={setDialogOpen} />
    </Box>
  );
};

export default Account;
