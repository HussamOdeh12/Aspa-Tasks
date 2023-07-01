const cardsReducer = (state = { isLoading: true, cards: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };

    //-------------------------------------------------------------------

    case "END_LOADING":
      return { ...state, isLoading: false };

    //-------------------------------------------------------------------

    case "FETCH_ALL":
      return {
        ...state,
        cards: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };

    //-------------------------------------------------------------------

    case "FETCH_BY_SEARCH":
      return { ...state, cards: action.payload.data };

    //-------------------------------------------------------------------

    case "FETCH_CARD":
      return { card: action.payload };

    //-------------------------------------------------------------------

    case "CREATE":
      return { ...state, cards: [...state.cards, action.payload] };

    //-------------------------------------------------------------------

    case "UPDATE":
    case "LIKE":
      return {
        ...state,
        cards: state.cards.map((card) =>
          // action.payload => updated card
          card._id === action.payload._id ? action.payload : card
        ),
      };

    //-------------------------------------------------------------------

    case "DELETE":
      // excludes the element that matches the specified condition
      return {
        ...state,
        cards: state.cards.filter((card) => card._id !== action.payload),
      };

    //-------------------------------------------------------------------

    default:
      return state;
  }
};

export default cardsReducer;
