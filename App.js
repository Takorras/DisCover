import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { StyleSheet, Text, View } from 'react-native';
import discoverReducers from './src/reducers';
import Home from './src/components/Home';
import sagas from './src/saga/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  discoverReducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home style={styles.container}/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
