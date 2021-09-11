import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import useStyles from './useStyleSignin';
import validate from '../Register/validateinfo';
import useFromLogin from './useFormLogin';
import { FormHelperText } from '@material-ui/core';

export default function SignIn() {
  const classes = useStyles();

  const { handleChange, values, handleSubmit, errors } = useFromLogin(validate);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar
          src="https://2.bp.blogspot.com/-PQLJ8wE918o/W-9VvbtXLbI/AAAAAAAAFBU/4ADJ6vqks8MsjS6nxEc2VLKR8OYDSucJQCLcBGAs/s1600/BRI.png"
          className={classes.avatar}
        />
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            error={errors.email}
            helperText={errors.email}
            value={values.email}
            onChange={handleChange}
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
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            helperText={errors.password}
            autoComplete="current-password"
          />

          <FormControl
            variant="outlined"
            className={classes.formControl}
            error={errors.loginas}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Login As
            </InputLabel>
            <Select
              label="loginas"
              id="loginUs"
              name="loginas"
              value={values.loginas}
              onChange={handleChange}
            >
              Login As
              <MenuItem value="" />
              <MenuItem value="tutor">Tutor</MenuItem>
              <MenuItem value="Leaner">Leaner</MenuItem>
            </Select>

            <FormHelperText>{errors.loginas}</FormHelperText>
          </FormControl>

          <div className={classes.button}>
            <Button
              style={{ height: 40 }}
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </div>

          <Grid container>
            <Grid item>
              <Link to="/register">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
