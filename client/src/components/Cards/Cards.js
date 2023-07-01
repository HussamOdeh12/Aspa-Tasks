import React from "react";
import { useSelector } from "react-redux";
import CreateCard from "./Card/Card";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";

const Cards = ({ setCurrentId }) => {
  //-------------------------------------------------------------------
  //--- Variables and States ---

  const classes = useStyles();
  const { cards, isLoading } = useSelector((state) => state.cardsReducer);

  /*
  Extract and access data from the Redux store. 
  This selector function defines what data from the Redux store should be extracted.
  */

  //-------------------------------------------------------------------

  if (!cards?.length && !isLoading) return "No Cards With This Title !!";

  return isLoading ? (
    <div className={classes.loadingPaper}>
      <CircularProgress size="100px" />
    </div>
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {cards?.map((card) => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={4}>
          <CreateCard card={card} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
