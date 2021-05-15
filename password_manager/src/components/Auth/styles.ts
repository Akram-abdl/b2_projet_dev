import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  BoxContainer: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  Form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  ButtonSubmit: {
    marginTop: 25,
    marginBottom: 20,
  },
}));
