import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { createCard, updateCard } from "../../actions/cards";
import Paginate from "../Pagination/Pagination";
import { successNotify, clearNotify } from "../Notify/Notify";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import DeleteSweepRoundedIcon from "@material-ui/icons/DeleteSweepRounded";
import {
  TextField,
  Typography,
  Button,
  Paper,
  CardActions,
} from "@material-ui/core";

// which page are we currently on.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Form = ({ currentId, setCurrentId }) => {
  //-------------------------------------------------------------------
  //--- Variables and States ---

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const card = useSelector((state) =>
    currentId
      ? state.cardsReducer.cards.find((card) => card._id === currentId)
      : null
  );

  const query = useQuery();
  const page = query.get("page") || 1;

  const user = JSON.parse(localStorage.getItem("profile"));

  // Data State
  const [cardData, setCardData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  // Validation State
  const [validation, setValidation] = useState({
    title: false,
    message: false,
  });

  //-------------------------------------------------------------------
  //--- Hooks ---

  useEffect(() => {
    if (card) setCardData(card);
  }, [card]);

  //-------------------------------------------------------------------
  //--- Validation Functions ---

  // Function to validate length
  const isValidLength = (value, minLength, maxLength) => {
    return value.length >= minLength && value.length <= maxLength;
  };

  // Function to validate letters with some symbols only
  const isLettersAndSymbols = (value) => {
    return /^[a-zA-Z\s-_.()]+$/.test(value);
  };

  //-------------------------------------------------------------------
  //--- HandleSubmit, Clear and if not log in functions ---

  // HandleSubmit Form ( post button )
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidation({
      title: false,
      message: false,
    });

    const { title, message } = cardData;

    const isTitleValid =
      isValidLength(title, 10, 50) && isLettersAndSymbols(title);
    const isMessageValid = isValidLength(message, 20, Infinity);

    if (!isTitleValid || !isMessageValid) {
      setValidation({
        title: !isTitleValid,
        message: !isMessageValid,
      });
    } else {
      if (currentId) {
        dispatch(
          updateCard(currentId, { ...cardData, name: user?.result?.name })
        );
        successNotify();
      } else {
        dispatch(
          createCard({ ...cardData, name: user?.result?.name }, navigate)
        );
      }
      clear();
    }
  };

  // Clear function for clear button
  const clear = () => {
    setCurrentId(null);
    setCardData({
      title: "",
      message: "",
      tags: "",
      selectedFile: null,
    });
    setValidation((prevState) => ({
      ...prevState,
      title: false,
      message: false,
    }));
  };

  // if no user exist
  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography align="center">
          Please Sign In to publish your task card now.
        </Typography>
        <Paginate page={page} />
      </Paper>
    );
  }

  //-------------------------------------------------------------------

  return (
    /*
    1) onChange => This way, the state object remains intact with all the properties,
    and only the specific property being updated is modified, 
    and without spread => it creates a nested object structure. 

    2) FileBase => convert the selected file to a base64 string. 
    */
    <Paper className={classes.paper} elevation={6}>
      <form
        className={classes.form}
        autoComplete="of"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Edit" : "Post"} Your Task Card
        </Typography>

        <TextField
          className={classes.textField}
          name="title"
          size="small"
          variant="standard"
          label="Title"
          fullWidth
          required
          value={cardData.title}
          error={validation.title}
          helperText={validation.title ? "10~50 characters only." : ""}
          onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
        />

        <TextField
          className={classes.textField}
          name="tags"
          size="small"
          variant="standard"
          label="Tags ( tag1,tag2 )"
          fullWidth
          value={cardData.tags}
          onChange={(e) =>
            setCardData({ ...cardData, tags: e.target.value.split(",") })
          }
        />

        <TextField
          className={classes.textField}
          name="message"
          size="small"
          variant="standard"
          label="Message"
          fullWidth
          required
          multiline
          minRows={5}
          value={cardData.message}
          error={validation.message}
          helperText={validation.message ? "Message must be at least 20." : ""}
          onChange={(e) =>
            setCardData({ ...cardData, message: e.target.value })
          }
        />

        <div className={classes.inputFile}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setCardData({ ...cardData, selectedFile: base64 })
            }
          />
        </div>

        <CardActions className={classes.formActions}>
          <Button
            className={classes.formBtn}
            variant="contained"
            startIcon={<DeleteSweepRoundedIcon />}
            color="secondary"
            fullWidth
            onClick={() => {
              clearNotify();
              clear();
            }}
          >
            clear
          </Button>
          <Button
            className={classes.formBtn}
            variant="contained"
            startIcon={<PublishRoundedIcon />}
            color="primary"
            type="submit"
            fullWidth
          >
            post
          </Button>
        </CardActions>
        <Paginate page={page} />
      </form>
    </Paper>
  );
};

export default Form;
