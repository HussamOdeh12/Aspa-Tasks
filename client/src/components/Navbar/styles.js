import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navBar: {
    position: "relative",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    margin: "50px 0 0 0",
    padding: "5px 15px",
    width: "65%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(240, 240, 240, 0.30)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(3px)",
    border: "2px solid rgba(219, 219, 219, 1)",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      justifyContent: "center",
    },
  },

  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      transform: "scale(0.9)",
      transition: "0.7s",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  home_btn: {
    marginRight: "20px",
  },

  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },

  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginTop: 20,
      justifyContent: "center",
    },
  },

  userName: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },

  logout: {
    marginLeft: "20px",
  },
}));
