import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Moment from "react-moment";
import { getCard } from "../../actions/cards";
import useStyles from "./styles";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import {
  Paper,
  Typography,
  Divider,
  CircularProgress,
} from "@material-ui/core/";

const CardDetails = () => {
  //-------------------------------------------------------------------
  //--- Variables and States ---

  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { card, isLoading } = useSelector((state) => state.cardsReducer);

  //-------------------------------------------------------------------
  //--- Hooks ---

  useEffect(() => {
    dispatch(getCard(id));
  }, [dispatch, id]);

  //-------------------------------------------------------------------

  if (!card) return null;

  return isLoading ? (
    <div className={classes.loadingPaper}>
      <CircularProgress size="100px" />
    </div>
  ) : (
    <Paper className={classes.paper} elevation={6}>
      <Link to="/cards?page=1">
        <ArrowBackRoundedIcon
          className={classes.arrow_icon}
          fontSize="large"
          color="primary"
        />
      </Link>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography className={classes.heading} variant="h3">
            {card.title}
          </Typography>

          <Typography gutterBottom variant="body2" color="textSecondary">
            {card.tags.map((tag) => `#${tag} `)}
          </Typography>

          <Typography className={classes.subtitle} variant="h6">
            Created by: {card.name}
          </Typography>

          <Typography variant="body2">
            <Moment fromNow>{card.createdAt}</Moment>
          </Typography>

          <Divider className={classes.divider} />

          <Typography className={classes.subtitle} gutterBottom variant="h6">
            {card.message}
          </Typography>

          <Divider className={classes.divider} />

          <Typography variant="body2">
            Recommended Section - coming soon!
          </Typography>

          <Divider className={classes.divider} />

          <Typography variant="body2">Comments - coming soon!</Typography>

          <Divider className={classes.divider} />
        </div>

        <div className={classes.media}>
          <img
            className={classes.media}
            src={
              card.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={card.title}
          />
        </div>
      </div>
    </Paper>
  );
};

export default CardDetails;
