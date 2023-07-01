import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../images/logo.png";
import useStyles from "./styles";

const Navbar = () => {
  //-------------------------------------------------------------------
  //--- Variables and States ---
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  //-------------------------------------------------------------------
  //--- Hooks and logout Function ---

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOG_OUT" });
    navigate("/");
    setUser(null);
  };

  //-------------------------------------------------------------------

  return (
    <>
      <AppBar className={classes.navBar} position="static">
        <Link to="/">
          <img
            className={classes.logo}
            src={logo}
            alt="No logo found"
            height="50px"
          />
        </Link>

        <div>
          <Link to="/">
            <Button
              className={classes.home_btn}
              variant="contained"
              color="secondary"
            >
              home
            </Button>
          </Link>
          <Link to="/cards?page=1">
            <Button variant="contained" color="secondary">
              apply now
            </Button>
          </Link>
        </div>

        {/* <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                src={user?.result.imageUrl}
                alt={user?.result.name}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user?.result.name}
              </Typography>
              <Button
                className={classes.logout}
                variant="contained"
                color="secondary"
                onClick={logout}
              >
                logout
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button variant="contained" color="primary">
                sign in
              </Button>
            </Link>
          )}
        </Toolbar> */}
      </AppBar>
    </>
  );
};

export default Navbar;
