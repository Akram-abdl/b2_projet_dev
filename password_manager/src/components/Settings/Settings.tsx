import { Box, Typography } from "@material-ui/core";

import useStyles from "./styles";

const Settings = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h1">Settings</Typography>
    </Box>
  );
};

export default Settings;
