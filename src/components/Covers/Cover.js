import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 180,
    flex: 1,
    marginTop: 4,
    marginLeft: 2,
    marginRight: 2
  },
  image: {
    height: '100%',
    width: '100%'
  }
})

const Cover = ({ book, onClick }) => (
  <TouchableOpacity style={styles.container} onPress={onClick}>
    <Image
      style={styles.image}
      source={{ uri: book.volumeInfo.imageLinks.thumbnail }}/>
  </TouchableOpacity>
)

export default Cover;
