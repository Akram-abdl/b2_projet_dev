import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";

import { RootState } from "../../reducers";
import Identification from "./Identification/Identification";

const Identifications = () => {
  const classes = useStyles();
  const identifications = useSelector((state: RootState) => state.identifications);

  console.log("identifications");
  console.log(identifications);

  return (
    <Box>
      <Typography variant="h1">Identifications</Typography>
      <Grid container spacing={2}>
        {["test1", "test2", "test3", "test4"].map((item) => (
          <Grid item xs={12} sm={5} lg={4} key={item}>
            <Identification />
          </Grid>
        ))}
      </Grid>
    </Box>
    // <Box>
    // <Typography variant="h1" className={classes.toolbar}>
    //     Identifications
    // </Typography>
    //     {identifications && identifications.map((identification: any) => <Typography>Hello</Typography>)}
    // </Box>
  );
};

export default Identifications;
