import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { deleteCard, likeCard } from "../../../actions/cards";
import { editNotify, deleteNotify } from "../../Notify/Notify";
import useStyles from "./styles";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import LaunchRoundedIcon from "@material-ui/icons/LaunchRounded";
import {
  Paper,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";

const CreateCard = ({ card, setCurrentId }) => {
  //-------------------------------------------------------------------
  //--- Variables ---

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //-------------------------------------------------------------------
  //--- onClick Functions ---

  const editCard = () => setCurrentId(card._id);
  const openCard = () => navigate(`/cards/${card._id}`);
  const likeCardFunction = () => dispatch(likeCard(card._id));
  const deleteCardFunction = () => {
    dispatch(deleteCard(card._id));
    navigate(`/cards`);
  };
  //-------------------------------------------------------------------

  return (
    <>
      <Paper className={classes.paper}>
        <Card className={classes.card} elevation={6}>
          <CardMedia
            className={classes.media}
            image={
              card.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            title={card.title}
          />

          <div className={classes.overlay}>
            <Typography noWrap variant="body1">
              {card.creator}
            </Typography>
            <Typography variant="body2">
              <Moment fromNow>{card.createdAt}</Moment>
            </Typography>
          </div>

          <div className={classes.cardButtons}>
            <Button
              className={classes.cardBtn}
              size="small"
              onClick={() => {
                editNotify();
                editCard();
              }}
            >
              <EditRoundedIcon fontSize="small" />
            </Button>
            <button className={classes.cardBtn} size="small" onClick={openCard}>
              <LaunchRoundedIcon fontSize="small" />
            </button>
          </div>

          <div className={classes.tags}>
            <Typography variant="body2" noWrap color="textSecondary">
              {card.tags.map((tag) => `#${tag} `)}
            </Typography>
          </div>

          <Typography className={classes.title} noWrap variant="body1">
            {card.title}
          </Typography>

          <CardContent>
            <Typography variant="body2" noWrap color="textSecondary">
              {card.message}
            </Typography>
          </CardContent>

          <CardActions className={classes.cardActions}>
            <Button
              className={classes.btnAction}
              variant="contained"
              size="small"
              color="primary"
              fullWidth
              onClick={likeCardFunction}
            >
              <ThumbUpRoundedIcon fontSize="small" />
              &nbsp;
              {`Like ${card.likeCount}`}
            </Button>

            <Button
              className={classes.btnAction}
              variant="contained"
              size="small"
              color="secondary"
              fullWidth
              onClick={() => {
                deleteNotify();
                deleteCardFunction();
              }}
            >
              <DeleteForeverRoundedIcon fontSize="small" />
              Delete
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </>
  );
};

export default CreateCard;
