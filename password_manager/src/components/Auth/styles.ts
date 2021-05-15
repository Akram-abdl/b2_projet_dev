import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  BoxContainer: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Icon: {
    marginBottom: 5,
    backgroundColor: theme.palette.secondary.main,
  },
  ButtonSubmit: {
    marginTop: 25,
    marginBottom: 20,
  },
}));
