import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
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
  const [isSignUp, setIsSignUp] = useState(false);

  //-------------------------------------------------------------------
  //--- switchForm Function ---

  const switchForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  //-------------------------------------------------------------------

  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockRoundedIcon />
        </Avatar>

        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>

        {isSignUp ? <SignUp /> : <SignIn />}

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button onClick={switchForm}>
              {isSignUp
                ? "already have an account? sign in"
                : "don't have an account? sign up"}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Auth;
