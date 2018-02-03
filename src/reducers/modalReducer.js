const initialState = {
  modalOpen: false
}

const modalReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, modalOpen: true, book: action.book };
    case 'CLOSE_MODAL':
      return { ...state, modalOpen: false };
    default:
      return state;
  }
}

export default modalReducer;
