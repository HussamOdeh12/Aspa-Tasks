import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCards } from "../../actions/cards";
import useStyles from "./styles";
import { Pagination, PaginationItem } from "@material-ui/lab";

//--- Import AND Used in Form Component ---

const Paginate = ({ page }) => {
  //-------------------------------------------------------------------
  //--- Variables and Selector ---

  const classes = useStyles();
  const dispatch = useDispatch();

  const { numberOfPages } = useSelector((state) => state.cardsReducer);

  //-------------------------------------------------------------------
  //--- Hooks ---

  useEffect(() => {
    if (page) dispatch(getCards(page));
  }, [dispatch, page]);

  //-------------------------------------------------------------------

  return (
    <Pagination
      className={classes.paginate}
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      size="small"
      color="primary"
      hideNextButton={true}
      hidePrevButton={true}
      renderItem={(item) => (
        <Link to={`/cards?page=${item.page}`}>
          <PaginationItem className={classes.item} {...item} />
        </Link>
      )}
    />
  );
};

export default Paginate;
