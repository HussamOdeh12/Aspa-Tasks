import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { deleteCard, likeCard } from "../../../actions/cards";
import { editNotify, deleteNotify } from "../../Notify/Notify";
import useStyles from "./styles";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
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
  const user = JSON.parse(localStorage.getItem("profile"));

  //-------------------------------------------------------------------
  //--- onClick and Likes Functions ---

  const openCard = () => navigate(`/cards/${card._id}`);
  const editCard = () => {
    setCurrentId(card._id);
    editNotify();
  };

  const likeCardFunction = () => dispatch(likeCard(card._id));
  const deleteCardFunction = () => {
    dispatch(deleteCard(card._id));
    deleteNotify();
  };

  const Likes = () => {
    if (card?.likeCount?.length > 0) {
      return card.likeCount.find((like) => like === user?.result?._id) ? (
        <>
          <ThumbUpRoundedIcon fontSize="small" />
          &nbsp;
          {card.likeCount.length > 2
            ? `You and ${card.likeCount.length - 1} others`
            : `${card.likeCount.length} like${
                card.likeCount.length > 1 ? "s" : ""
              }`}
        </>
      ) : (
        <>
          <ThumbUpOutlinedIcon fontSize="small" />
          &nbsp;{card.likeCount.length}{" "}
          {card.likeCount.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpOutlinedIcon fontSize="small" />
        &nbsp;Like
      </>
    );
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
              {card.name}
            </Typography>
            <Typography variant="body2">
              <Moment fromNow>{card.createdAt}</Moment>
            </Typography>
          </div>

          <div className={classes.cardButtons}>
            {user?.result?._id === card?.creator && (
              <Button
                className={classes.cardBtn}
                size="small"
                onClick={() => {
                  editCard();
                }}
              >
                <EditOutlinedIcon fontSize="small" />
              </Button>
            )}
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
              disabled={!user?.result}
              fullWidth
              onClick={likeCardFunction}
            >
              <Likes />
            </Button>

            {user?.result?._id === card?.creator && (
              <Button
                className={classes.btnAction}
                variant="contained"
                size="small"
                color="secondary"
                fullWidth
                onClick={() => {
                  deleteCardFunction();
                }}
              >
                <DeleteForeverRoundedIcon fontSize="small" />
                Delete
              </Button>
            )}
          </CardActions>
        </Card>
      </Paper>
    </>
  );
};

export default CreateCard;
