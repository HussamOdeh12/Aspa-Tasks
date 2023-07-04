import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../actions/auth";
import Input from "./Input";
import useStyles from "./styles";
import { Grid, Button } from "@material-ui/core";

const SignUp = () => {
  //-------------------------------------------------------------------
  //--- Variables and States ---

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Sign Up Data State
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Validation State
  const [validation, setValidation] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  //-------------------------------------------------------------------
  //--- Validation Functions ---

  // Function to validate length
  const validLength = (value, minLength, maxLength) => {
    return value.length >= minLength && value.length <= maxLength;
  };

  // Validate letters for Names
  const lettersForNames = (value) => {
    return /^[a-zA-Z\s]+$/.test(value);
  };

  // Email Validation
  const emailValidation = (value) => {
    return /^[a-zA-Z][a-zA-Z0-9._-]+@[a-z]+\.(com)$/.test(value);
  };

  // Password validation
  const passwordValidation = (value) => {
    return /^[a-zA-Z0-9]+$/.test(value);
  };

  // confirmPassword Validation
  const isPasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  //-------------------------------------------------------------------
  //--- Handlers and Functions ---

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidation({
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      confirmPassword: false,
    });

    const { firstName, lastName, email, password, confirmPassword } =
      signUpData;

    const isFirstNameValid =
      validLength(firstName, 1, 8) && lettersForNames(firstName);
    const isLastNameValid =
      validLength(lastName, 1, 8) && lettersForNames(lastName);
    const isEmailValid = emailValidation(email);
    const isPasswordValid =
      validLength(password, 8, 20) && passwordValidation(password);
    const isConfirmPasswordValid = isPasswordMatch(password, confirmPassword);

    if (
      !isFirstNameValid ||
      !isLastNameValid ||
      !isEmailValid ||
      !isPasswordValid ||
      !isConfirmPasswordValid
    ) {
      setValidation({
        firstName: !isFirstNameValid,
        lastName: !isLastNameValid,
        email: !isEmailValid,
        password: !isPasswordValid,
        confirmPassword: !isConfirmPasswordValid,
      });
    } else {
      dispatch(signup(signUpData, navigate));
    }
  };

  const handleChange = (e) => {
    // change the state depend on what the user write in the input fields.
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
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
          name="firstName"
          label="First Name"
          handleChange={handleChange}
          autoFocus
          half
          error={validation.firstName}
          helperText={validation.firstName ? "At most 8 characters" : ""}
        />
        <Input
          name="lastName"
          label="Last Name"
          handleChange={handleChange}
          half
          error={validation.lastName}
          helperText={validation.lastName ? "At most 8 characters" : ""}
        />
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
        <Input
          name="confirmPassword"
          label="Repeat Password"
          handleChange={handleChange}
          type="password"
          error={validation.confirmPassword}
          helperText={
            validation.confirmPassword ? "Should be equal to the password" : ""
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
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;
