import { AsyncStorage } from 'react-native';

const api = {
  fetchBooks (query, threshold, index) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${threshold}&startIndex=${index}`)
      .then(response => response.json())
      .then(json => json.items)
      .then(books => books.filter(element => (element.volumeInfo.imageLinks)))
      .then(books => books.map(element => element.volumeInfo))
  },
  fetchDB (key) {
    return AsyncStorage.getItem(key)
      .then(response => JSON.parse(response))
  },
  setDB (key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value))
  },
  downloadFile (url) {
    const RNFS = require('react-native-fs');
    const id = url.split('=')[1].split('&')[0];
    return RNFS.downloadFile({
      fromUrl: url,
      toFile: `${RNFS.PicturesDirectoryPath}/${id}.png`
    }).promise
  }
}

export default api;
