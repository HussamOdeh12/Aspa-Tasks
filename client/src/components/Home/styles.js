import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  },

  section: {
    maxWidth: "800px",
    borderRadius: "10px",
    margin: "10px",
  },

  heading: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      textAlign: "center",
      fontSize: "25px",
    },
  },

  task_icon: {
    marginRight: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  subtitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },

  divider: {
    margin: "20px 0",
  },

  media: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
