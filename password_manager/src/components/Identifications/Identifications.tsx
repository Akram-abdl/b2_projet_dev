import React from "react";
import { Box, Typography, Grid, Button, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";

import { RootState } from "../../reducers";
import Identification from "./Identification/Identification";
import NewIdentificationDialog from "./NewIdentificationDialog/NewIdentificationDialog";

const Identifications = () => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const identifications = useSelector((state: RootState) => state.identifications);

  const handleClickDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  console.log("identifications");
  console.log(identifications);

  return (
    <Box>
      <Typography variant="h1">Identifications</Typography>
      <Button variant="outlined" color="primary" onClick={handleClickDialogOpen}>
        Add identification
      </Button>
      <Grid container spacing={2}>
        {["test1", "test2", "test3", "test4"].map((item) => (
          <Grid item xs={12} sm={5} lg={4} key={item}>
            <Identification />
          </Grid>
        ))}
      </Grid>
      <NewIdentificationDialog open={dialogOpen} onClose={handleDialogClose} />
    </Box>
  );
};

export default Identifications;
