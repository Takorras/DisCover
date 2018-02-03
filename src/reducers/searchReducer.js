const initialState = {
  books: [],
  loading: false,
  index: 0,
  threshold: 30,
  query: ""
};

const searchReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'CONTENT_SEARCH_LOADING':
      return { ...state, loading: true };
    case 'BOOKS_FETCH_SEARCH_SUCCEEDED':
      return { ...state, loading: false, books: state.books.concat(action.books), index: state.index+state.threshold };
    case 'BOOKS_FETCH_SEARCH_FAILED':
      return { ...state, loading: false, error: action.message };
    case 'EDIT_QUERY':
      return { ...state, query: action.text, books: [], index: 0 };
    default:
      return state;
  }
}

export default searchReducer;
