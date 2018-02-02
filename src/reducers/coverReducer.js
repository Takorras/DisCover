const initialState = {
  books: [],
  loading: false,
  index: 0,
  threshold: 30
};

const coverReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'CONTENT_LOADING':
      return { ...state, loading: true };
    case 'BOOKS_FETCH_SUCCEEDED':
      return { ...state, loading: false, books: state.books.concat(action.books), index: state.index+state.threshold };
    case 'BOOKS_FETCH_FAILED':
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
}

export default coverReducer;
