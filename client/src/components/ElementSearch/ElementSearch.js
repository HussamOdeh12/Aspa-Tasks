import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCardsBySearch } from "../../actions/cards";
import useStyles from "./styles";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Paper, TextField, Button } from "@material-ui/core";

const ElementSearch = () => {
  //-------------------------------------------------------------------
  //--- Variables and States ---

  const [search, setSearch] = useState("");

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //-------------------------------------------------------------------
  //--- onClick and onKeyUp ---

  const searchCard = () => {
    if (search.trim()) {
      dispatch(getCardsBySearch({ search }));
      navigate(`/cards/search?searchQuery=${search || "none"}`);
    } else {
      navigate("/cards?page=1");
    }
  };

  // corresponds to the Enter key
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      searchCard();
    }
  };

  //-------------------------------------------------------------------

  return (
    <Paper className={classes.paper}>
      <TextField
        className={classes.searchInput}
        name="search"
        variant="standard"
        size="small"
        label="Search by title"
        value={search}
        onKeyUp={handleKeyUp}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Button
        className={classes.searchBtn}
        startIcon={<SearchRoundedIcon />}
        color="primary"
        variant="contained"
        size="small"
        onClick={searchCard}
      >
        Search
      </Button>
    </Paper>
  );
};

export default ElementSearch;
