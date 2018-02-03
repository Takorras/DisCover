const initialState = {
  books: []
};

const favoriteReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FAVORITES_FETCH_SUCCEEDED':
      if (!action.books) return state;
      return { ...state, books: action.books };
    case 'ADD_FAVORITE_SUCCEEDED':
      return { ...state, books: action.books };
    case 'REMOVE_FAVORITE':
      return { ...state, books: state.books.filter(element => (element!=action.book)) };
    default:
      return state;
  }
}

export default favoriteReducer;
