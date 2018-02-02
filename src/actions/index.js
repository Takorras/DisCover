export const openModal = (imageUrl) => {
  return { type: 'OPEN_MODAL', url: imageUrl };
}

export const closeModal = () => {
  return { type: 'CLOSE_MODAL' };
}
