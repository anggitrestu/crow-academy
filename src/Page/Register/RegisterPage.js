import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { FormHelperText } from '@material-ui/core';
import useStyles from './useStylesRegsiter';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import useFromRegister from './useFormRegister';
import validate from './validateinfo';

const RegisterPage = () => {
  const classes = useStyles();
  const { handleChange, values, handleSubmit, errors } =
    useFromRegister(validate);

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
            type="email"
            error={errors.email}
            helperText={errors.email}
            autoComplete="email"
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

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Confirm Password"
            type="password"
            id="password2"
            value={values.password2}
            onChange={handleChange}
            error={errors.password2}
            helperText={errors.password2}
            autoComplete="current-password"
          />

          <FormControl
            variant="outlined"
            className={classes.formControl}
            error={errors.registeras}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Register As
            </InputLabel>
            <Select
              label="registeras"
              value={values.registeras}
              name="registeras"
              onChange={handleChange}
            >
              Register As
              <MenuItem value=""> </MenuItem>
              <MenuItem value="tutor">Tutor</MenuItem>
              <MenuItem value="leaner">Leaner</MenuItem>
            </Select>

            <FormHelperText>{errors.registeras}</FormHelperText>
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
              <Link to="../LoginPage/LoginPage">
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
