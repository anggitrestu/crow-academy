export default function validateInfo(values) {
  let errors = [];

  if (!values.email) {
    errors.email = "Email required";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to 8 charecters or more";
  }
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Password do not match";
  }

  if (!values.registeras) {
    errors.registeras = "Select one of the options";
  }

  if (!values.loginas) {
    errors.loginas = "Please select one of the options";
  }

  return errors;
}
