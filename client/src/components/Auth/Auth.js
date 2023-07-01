import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup, signin } from "../../actions/auth";
import Input from "./Input";
import useStyles from "./styles";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import {
  Container,
  Paper,
  Avatar,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";

const Auth = () => {
  //-------------------------------------------------------------------
  //--- Variables and States ---

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //-------------------------------------------------------------------
  //--- Handlers and Functions ---

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    // change the state depend on what the user write in the input fields.
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  //-------------------------------------------------------------------

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockRoundedIcon />
        </Avatar>

        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type="password"
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>

          <Button
            className={classes.submit}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchForm}>
                {isSignUp
                  ? "already have an account? sign in"
                  : "don't have an account? sign up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
