const initialState = {
  books: [],
  loading: false,
  index: 0,
  threshold: 30,
  favorites: []
};

const coverReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'CONTENT_LOADING':
      return { ...state, loading: true };
    case 'BOOKS_FETCH_SUCCEEDED':
      return { ...state, loading: false, books: state.books.concat(action.books), index: state.index+state.threshold };
    case 'BOOKS_FETCH_FAILED':
      return { ...state, loading: false, error: action.message };
    case 'ADD_FAVORITE':
      if (state.favorites.includes(action.book)) return state;
      return { ...state, favorites: state.favorites.concat(action.book) };
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: state.favorites.filter(element => (element!=action.book)) };
    default:
      return state;
  }
}

export default coverReducer;
