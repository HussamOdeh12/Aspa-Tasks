import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  paper: {
    padding: "8px",
    borderRadius: "10px",
    background: "rgba(240, 240, 240, 0.30)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(1px)",
    border: "2px solid rgba(219, 219, 219, 1)",
  },

  card: {
    minHeight: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "10px",
    background: "rgba(240, 240, 240, 0.70)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(1px)",
    border: "2px solid rgba(219, 219, 219, 1)",
    "&:hover": {
      transform: "scale(1.050)",
      transition: "0.5s",
    },
  },

  media: {
    paddingTop: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backgroundBlendMode: "darken",
    borderRadius: "10px",
  },

  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },

  cardButtons: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "20px",
    right: "10px",
  },

  cardBtn: {
    paddingBottom: "15px",
    cursor: "pointer",
    color: "white",
    background: "none",
    border: "none",
    outline: "none",
  },

  tags: {
    display: "flex",
    justifyContent: "space-between",
    margin: "15px",
  },

  title: {
    padding: "0 15px",
  },

  cardActions: {
    padding: "0 10px 10px",
    display: "flex",
    justifyContent: "space-between",
  },

  btnAction: {
    fontSize: "12px",
  },
});
