import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  BoxContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  },
  Icon: {
    marginBottom: 5,
    backgroundColor: theme.palette.secondary.main,
  },
  BoxForm: {
    width: '100%', /* Fix IE11 issue. */
    marginTop: 1,
  },
  ButtonSubmit: {
    marginTop: 25, 
    marginBottom: 20 
  }
}));
