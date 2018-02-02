import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    backgroundColor: "skyblue",
    margin: 4
  }
})

const CoverItem = () => {
  return (
    <View style={styles.cover}/>
  )
}

export default CoverItem;
