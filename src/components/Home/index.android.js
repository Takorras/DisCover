import React from 'react';
import { StyleSheet, View, ToolbarAndroid, StatusBar, Text } from 'react-native';
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
    backgroundColor: "sienna"
  },
  toolbarTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "serif"
  },
  statusBar: {
    height: StatusBar.currentHeight,
    width: "100%"
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
      backgroundColor: "sienna"
    }
  }
});

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <StatusBar
            backgroundColor={'saddlebrown'}
            barStyle="light-content"
            translucent/>
        </View>
        <ToolbarAndroid
          style={styles.toolbar}
          actions={[{title: "Settings", icon: require("./settings.png"), show: "never"}]}
        >{<Text style={styles.toolbarTitle}>DisCover</Text>}</ToolbarAndroid>
        <TabNavigation/>
        <ImageModal/>
      </View>
    )
  }
}

export default Home;
