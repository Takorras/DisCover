const initialState = {
  books: []
};

const favoriteReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (state.books.includes(action.book)) return state;
      return { ...state, books: state.books.concat(action.book) };
    case 'REMOVE_FAVORITE':
      return { ...state, books: state.books.filter(element => (element!=action.book)) };
    default:
      return state;
  }
}

export default favoriteReducer;
