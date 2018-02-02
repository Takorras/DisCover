import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const styles = StyleSheet.create({
  cover: {
    width: 100,
    height: 180,
    flex: 1,
    margin: 2
  }
})

const trimUrl = (url) => `${url.split('&')[0]}&printsec=frontcover&img=1`;

const CoverItem = ({ book }) => {
  return (
    <Image
      style={styles.cover}
      source={{ uri: book.imageLinks.thumbnail }}/>
  )
}

export default CoverItem;
