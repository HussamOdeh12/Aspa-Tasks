import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navBar: {
    position: "relative",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    width: "65%",
    margin: "50px 0 0 0",
    padding: "5px 15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(240, 240, 240, 0.30)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(3px)",
    border: "2px solid rgba(219, 219, 219, 1)",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  left_nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    "&:hover": {
      transform: "scale(0.9)",
      transition: "0.7s",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  home_btn: {
    margin: "0 20px",
  },

  profile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  avatar: {
    backgroundColor: "#3f51b5",
    margin: "0 20px",
  },

  userName: {
    color: "black",
    margin: "0 20px 0 0",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
