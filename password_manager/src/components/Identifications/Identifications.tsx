import React, { useState } from "react";
import { Box, Typography, Grid, Button, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";

import { RootState } from "../../reducers";
import Identification from "./Identification/Identification";
import NewIdentificationDialog from "./NewIdentificationDialog/NewIdentificationDialog";
import IIdentification from "../../models/identification";

const Identifications = () => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const identifications = useSelector((state: RootState) => state.identifications);

  const handleClickDialogOpen = (e: React.MouseEvent<any>) => {
    e.preventDefault();

    setDialogOpen(true);
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
        {!identifications || identifications.length === 0 ? (
          <Typography>No identification</Typography>
        ) : (
          identifications.map((item: IIdentification) => (
            <Grid item xs={12} sm={5} lg={4} key={item._id}>
              <Identification currentIdentification={item} />
            </Grid>
          ))
        )}
        {}
      </Grid>
      <NewIdentificationDialog open={dialogOpen} setDialogOpen={setDialogOpen} />
    </Box>
  );
};

export default Identifications;
