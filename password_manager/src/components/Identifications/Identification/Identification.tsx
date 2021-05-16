import React from "react";
import { Card, CardActionArea, IconButton, CardContent, CardMedia, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import identificationImg from "../../../assets/identification.png";
import MenuGrow from "../../Controls/MenuGrow";
import useStyles from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";

const Identification = (props: any) => {
  const classes = useStyles();

  return (
    <Card className={classes.Root}>
      <CardActionArea
        className={classes.CardActionArea}
        onClick={(e: React.MouseEvent<any>) => {
          console.log("oui");
        }}
      >
        <CardMedia className={classes.Media} image={identificationImg} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {props.currentIdentification.site}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.currentIdentification.username || props.currentIdentification.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton className={classes.DeleteButton}>
        <DeleteIcon className={classes.DeleteIcon} />
      </IconButton>
    </Card>
  );
};

export default Identification;
