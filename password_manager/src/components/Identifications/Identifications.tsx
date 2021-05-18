import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Button, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";

import { RootState } from "../../reducers";
import Identification from "./Identification/Identification";
import NewIdentificationDialog from "./NewIdentificationDialog/NewIdentificationDialog";
import IIdentification from "../../models/identification";
import { getIdentifications } from "../../actions/identifications";

const Identifications = (props: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [dialogOpen, setDialogOpen] = useState(false);
  const identifications = useSelector((state: RootState) => state.identifications);

  const handleClickDialogOpen = (e: React.MouseEvent<any>) => {
    e.preventDefault();

    setDialogOpen(true);
  };

  useEffect(() => {
    dispatch(getIdentifications(props.user?.result?._id));
  }, [dispatch]);

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
      <NewIdentificationDialog user={props.user?.result} open={dialogOpen} setDialogOpen={setDialogOpen} />
    </Box>
  );
};

export default Identifications;
