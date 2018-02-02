const coverReducer = (state={loading: false}, action) => {
  switch (action.type) {
    case 'CONTENT_LOADING':
      return { ...state, loading: true };
    default:
      return state;
  }
}

export default coverReducer;
