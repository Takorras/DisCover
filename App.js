import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';

export default class App extends React.Component {
  render() {
    return (
      <Home style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
