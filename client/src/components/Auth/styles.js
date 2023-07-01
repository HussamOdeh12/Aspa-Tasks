import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderRadius: "10px",
    background: "rgba(240, 240, 240, 0.30)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(3px)",
    border: "2px solid rgba(219, 219, 219, 1)",
  },

  avatar: {
    margin: "10px",
    backgroundColor: "#f50057",
  },

  form: {
    width: "100%",
    marginTop: "20px",
  },

  submit: {
    margin: "15px 0",
  },
}));
