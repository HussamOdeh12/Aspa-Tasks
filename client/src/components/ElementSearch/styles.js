import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "2px 8px 14px",
    marginBottom: "8px",
    borderRadius: "10px",
    background: "rgba(240, 240, 240, 0.70)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(1px)",
    border: "2px solid rgba(219, 219, 219, 1)",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },

  searchInput: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginBottom: "10px",
    },
  },

  searchBtn: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));
