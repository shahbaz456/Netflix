const initialState = {
  topmovies: [],
  popular: [],
  upcoming: [],
  list: [],
  searchlist: "",
};
const moviesreducers = (state = initialState, action) => {
  switch (action.type) {
    case "TOP_RATED": {
      return { ...state, topmovies: action.payload };
    }
    case "POPULAR": {
      return {
        ...state,
        popular: action.payload,
      };
    }
    case "UPCOMING": {
      return {
        ...state,
        upcoming: action.payload,
      };
    }
    case "MOVIES_LIST": {
      return {
        ...state,
        list: action.payload,
      };
    }
    case "RESET_LIST": {
      return {
        ...state,
        list: [],
      };
    }

    default:
      return state;
  }
};
export default moviesreducers;
