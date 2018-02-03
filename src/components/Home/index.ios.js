import React from 'react';
import { StyleSheet, View, StatusBar, Image } from 'react-native';
import { TabNavigator, SafeAreaView } from 'react-navigation';
import Covers from '../Covers';
import Favorite from '../Favorite';
import Search from '../Search';
import ImageModal from './ImageModal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const TabNavigation = TabNavigator({
  Cover: {
    screen: Covers,
    navigationOptions: {
      tabBarIcon:({tintColor}) =>
        <Image style={{"width":32, "height":32, "tintColor":tintColor}} source={require('./home.png')} resizeMode="contain" />
    }
  },
  Favorite: {
    screen: Favorite,
    navigationOptions: {
      tabBarIcon:({tintColor}) =>
        <Image style={{"width":30, "height":30, "tintColor":tintColor}} source={require('./favorite_fill.png')}/>
    }
   },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarIcon:({tintColor}) =>
        <Image style={{"width":32, "height":32, "tintColor":tintColor}} source={require('./search.png')}/>
    }
   }
}, {
  tabBarPosition: "bottom",
  animationEnabled: true,
  swipeEnabled: true
});

class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.statusBar}/>
        <TabNavigation/>
        <ImageModal/>
      </SafeAreaView>
    )
  }
}

export default Home;
