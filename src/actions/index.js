export const openModal = (book) => {
  return { type: 'OPEN_MODAL', book: book };
}

export const closeModal = () => {
  return { type: 'CLOSE_MODAL' };
}
