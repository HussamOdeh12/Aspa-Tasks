import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
  },

  paper: {
    padding: "20px",
    borderRadius: "10px",
    background: "rgba(240, 240, 240, 0.30)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(3px)",
    border: "2px solid rgba(219, 219, 219, 1)",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },

  section: {
    borderRadius: "10px",
    margin: "20px",
  },

  arrow_icon: {
    borderRadius: "10px",
    background: "rgba(240, 240, 240, 0.30)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(3px)",
    border: "3px solid rgba(219, 219, 219, 1)",
  },

  heading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },

  subtitle: {
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
  },

  divider: {
    margin: "20px 0",
  },

  media: {
    width: "1000px",
    height: "550px",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      width: "600px",
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "400px",
      height: "250px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
