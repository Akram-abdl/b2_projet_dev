import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import decode from "jwt-decode";

import Menu from "../Menu/Menu";

import { makeStyles, Theme } from "@material-ui/core/styles";
import { logout } from "../../actions/auth";

const useStyles = makeStyles((theme: Theme) => ({
  root: { maxWidth: "100%" },
}));

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile") || ""));

  useEffect(() => {
    function checkUserLoggedTime() {
      const token = user?.token;
      console.log("check");

      if (token) {
        const decodedToken: any = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime()) logout(setUser, history, dispatch);
      }

      setUser(JSON.parse(localStorage.getItem("profile") || ""));
    }

    const intervalId = setInterval(() => {
      checkUserLoggedTime();
    }, 1000 * 5);

    return () => clearInterval(intervalId);
  }, [user]);

  return (
    <Container component="main" className={classes.root}>
      <Menu user={user?.result} setUser={setUser} />
    </Container>
  );
};

export default Home;
