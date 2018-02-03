import React from 'react';
import { StyleSheet, View, ToolbarAndroid, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Covers from '../Covers';
import Favorite from '../Favorite';
import Search from '../Search';
import ImageModal from './ImageModal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    height: 56,
    backgroundColor: "peru"
  },
  statusBar: {
    height: StatusBar.currentHeight,
    width: "100%",
    backgroundColor: "peru"
  }
});

const TabNavigation = TabNavigator({
  Cover: { screen: Covers },
  Favorite: { screen: Favorite },
  Search: { screen: Search }
}, {
  tabBarPosition: "top",
  animationEnabled: true,
  tabBarOptions: {
    style: {
      backgroundColor: "peru"
    }
  }
});

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}/>
        <ToolbarAndroid
          style={styles.toolbar}
          title="DisCover"
          titleColor="white"
          actions={[{title: "Settings", icon: require("./settings.png"), show: "always"}]}
        />
        <TabNavigation/>
        <ImageModal/>
      </View>
    )
  }
}

export default Home;
