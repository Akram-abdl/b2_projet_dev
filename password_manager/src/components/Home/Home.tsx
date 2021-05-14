import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

import Menu from "../Menu/Menu";

import { getIdentifications } from "../../actions/identifications";
import Identifications from "../Identifications/Identifications";
import Account from "../Account/Account";
import Settings from "../Settings/Settings";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "100%" },
}));

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile") || "");

  //   console.log("user");
  //   console.log(user?.result);

  useEffect(() => {
    dispatch(getIdentifications(user?.result?._id));
  }, [dispatch]);

  return (
    <Container component="main" className={classes.root}>
      <Menu />
    </Container>
  );
};

export default Home;
