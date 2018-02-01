import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}/>
    )
  }
}

export default Search;
