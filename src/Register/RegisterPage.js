import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import useStyles from "./useStylesRegsiter";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Link from "@material-ui/core/Link";

const RegisterPage = () => {
  const classes = useStyles();

  const [registeras, setregisteras] = React.useState("");

  const handleChangeRegister = (event) => {
    setregisteras(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar
          src="https://2.bp.blogspot.com/-PQLJ8wE918o/W-9VvbtXLbI/AAAAAAAAFBU/4ADJ6vqks8MsjS6nxEc2VLKR8OYDSucJQCLcBGAs/s1600/BRI.png"
          className={classes.avatar}
        />
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Password"
            type="password"
            id="password2"
            autoComplete="current-password"
          />

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Register As
            </InputLabel>
            <Select
              label="registeras"
              value={registeras}
              onChange={handleChangeRegister}
            >
              Register As
              <MenuItem value="" />
              <MenuItem value="tutor">Tutor</MenuItem>
              <MenuItem value="leaner">Leaner</MenuItem>
            </Select>
          </FormControl>

          <div className={classes.button}>
            <Button
              style={{ height: 40 }}
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </div>

          <Grid container>
            <Grid item>
              <Link href="../LoginPage/LoginPage">
                Already have an account? Sign In"
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default RegisterPage;
