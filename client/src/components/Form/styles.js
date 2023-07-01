import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    padding: "8px",
    borderRadius: "10px",
    background: "rgba(240, 240, 240, 0.30)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(1px)",
    border: "2px solid rgba(219, 219, 219, 1)",
  },

  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "15px 20px",
    borderRadius: "10px",
    background: "rgba(240, 240, 240, 0.70)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(1px)",
    border: "2px solid rgba(219, 219, 219, 1)",
  },

  textField: {
    color: "white",
    marginTop: "5px",
  },

  inputFile: {
    width: "100%",
    margin: "12px 0",
  },

  formActions: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  formBtn: {
    [theme.breakpoints.down("xs")]: {
      margin: "5px",
    },
  },
}));
