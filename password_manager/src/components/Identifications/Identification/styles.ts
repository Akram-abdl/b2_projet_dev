import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  Root: {
    display: "flex",
    flexDirection: "row",
    maxWidth: 350,
    minWidth: 270,
  },
  CardActionArea: {
    display: "flex",
    flexDirection: "row",
  },
  Media: {
    width: 100,
    height: 100,
  },
  DeleteButton: { width: 40, height: 40 },
  DeleteIcon: { color: "#d11e1e" },
}));
