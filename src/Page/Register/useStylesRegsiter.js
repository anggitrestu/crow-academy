import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  formControl: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
