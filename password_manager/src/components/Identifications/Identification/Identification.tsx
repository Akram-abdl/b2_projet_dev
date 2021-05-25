import React, { useState } from "react";
import { Card, CardActionArea, IconButton, CardContent, CardMedia, Typography } from "@material-ui/core";

import identificationImg from "../../../assets/identification.png";
import useStyles from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { deleteIdentification } from "../../../actions/identifications";
import NewIdentificationDialog from "../NewIdentificationDialog/NewIdentificationDialog";

const Identification = (props: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDelete = (e: React.MouseEvent<any>) => {
    e.preventDefault();

    dispatch(deleteIdentification(props.currentIdentification._id));
  };

  return (
    <>
      <Card className={classes.Root}>
        <CardActionArea
          className={classes.CardActionArea}
          onClick={(e: React.MouseEvent<any>) => {
            setDialogOpen(true);
          }}
        >
          <CardMedia className={classes.Media} image={props.currentIdentification.icon || identificationImg} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {props.currentIdentification.site}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.currentIdentification.username || props.currentIdentification.email}
            </Typography>
          </CardContent>
        </CardActionArea>
        <IconButton className={classes.DeleteButton} onClick={handleDelete}>
          <DeleteIcon className={classes.DeleteIcon} />
        </IconButton>
      </Card>
      <NewIdentificationDialog
        user={props.user}
        open={dialogOpen}
        setDialogOpen={setDialogOpen}
        currentIdentification={props.currentIdentification}
      />
    </>
  );
};

export default Identification;
