export const openModal = (book) => {
  return { type: 'OPEN_MODAL', book: book };
}

export const closeModal = () => {
  return { type: 'CLOSE_MODAL' };
}

export const addFavorite = (book) => {
  return { type: 'ADD_FAVORITE', book: book };
}

export const removeFavorite = (book) => {
  return { type: 'REMOVE_FAVORITE', book: book };
}
