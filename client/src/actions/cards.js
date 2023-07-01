import * as api from "../api";

//-------------------------------------------------------------------
//--- Get Cards Action ---

export const getCards = (page) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchCards(page);
    dispatch({
      type: "FETCH_ALL",
      payload: { data, currentPage, numberOfPages },
    });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

//-------------------------------------------------------------------
//--- Get Cards By Searching ---

export const getCardsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const {
      data: { data },
    } = await api.fetchCardsBySearch(searchQuery);
    dispatch({ type: "FETCH_BY_SEARCH", payload: { data } });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

//-------------------------------------------------------------------
//--- Get One Details Card Action ---

export const getCard = (id) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    // destructuring assignment to extract the data property from the object.
    const { data } = await api.fetchCard(id);
    dispatch({ type: "FETCH_CARD", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

//-------------------------------------------------------------------
//--- Create Card Action ---

export const createCard = (card, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.createCard(card);
    dispatch({ type: "CREATE", payload: data });
    navigate(`/cards/${data._id}`);
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

//-------------------------------------------------------------------
//--- Update Card Action ---

export const updateCard = (id, card) => async (dispatch) => {
  try {
    const { data } = await api.updateCard(id, card);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

//-------------------------------------------------------------------
//--- Delete Card Action ---

export const deleteCard = (id) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    await api.deleteCard(id);
    dispatch({ type: "DELETE", payload: id });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

//-------------------------------------------------------------------
//--- Like Card Action ---

export const likeCard = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeCard(id);
    dispatch({ type: "LIKE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
