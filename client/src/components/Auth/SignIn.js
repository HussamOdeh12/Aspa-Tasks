import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../../actions/auth";
import Input from "./Input";
import useStyles from "./styles";
import { Grid, Button } from "@material-ui/core";

const SignIn = () => {
  //-------------------------------------------------------------------
  //--- Variables and States ---

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Sign In Data State
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  // Validation State
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  //-------------------------------------------------------------------
  //--- Validation Functions ---

  // Function to validate length
  const validLength = (value, minLength, maxLength) => {
    return value.length >= minLength && value.length <= maxLength;
  };

  // Email Validation
  const emailValidation = (value) => {
    return /^[a-zA-Z][a-zA-Z0-9._-]+@[a-z]+\.(com)$/.test(value);
  };

  // Password validation
  const passwordValidation = (value) => {
    return /^[a-zA-Z0-9]+$/.test(value);
  };

  //-------------------------------------------------------------------
  //--- Handlers and Functions ---

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidation({
      email: false,
      password: false,
    });

    const { email, password } = signInData;

    const isEmailValid = emailValidation(email);
    const isPasswordValid =
      validLength(password, 8, 20) && passwordValidation(password);

    if (!isEmailValid || !isPasswordValid) {
      setValidation({
        email: !isEmailValid,
        password: !isPasswordValid,
      });
    } else {
      dispatch(signin(signInData, navigate));
    }
  };

  const handleChange = (e) => {
    // change the state depend on what the user write in the input fields.
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  //-------------------------------------------------------------------

  return (
    <form
      noValidate
      autoComplete="of"
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        <Input
          name="email"
          label="Email Address"
          handleChange={handleChange}
          type="email"
          error={validation.email}
          helperText={
            validation.email ? "Should be similar to: aspa99@gmail.com" : ""
          }
        />
        <Input
          name="password"
          label="Password"
          handleChange={handleChange}
          type="password"
          error={validation.password}
          helperText={
            validation.password
              ? "must be 8~20 characters and numbers only"
              : ""
          }
        />
      </Grid>
      <Button
        className={classes.submit}
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Sign In
      </Button>
    </form>
  );
};

export default SignIn;
