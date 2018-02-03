const api = {
  fetchBooks (query, threshold, index) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${threshold}&startIndex=${index}`)
      .then(response => response.json())
      .then(json => json.items)
      .then(books => books.filter(element => (element.volumeInfo.imageLinks)))
      .then(books => books.map(element => element.volumeInfo))
  }
}

export default api;
