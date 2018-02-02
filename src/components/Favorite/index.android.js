import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import Cover from '../Covers/Cover';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class Favorite extends React.Component {
  onEndReached() {
    if (!this.props.loading) this.props.fetchCovers();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={3}
          data={this.props.books}
          keyExtractor={(_, index) => index}
          renderItem={item => <Cover book={item.item}/>}
          onEndReached={info => {}}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            <ActivityIndicator
              style={styles.indicator}
              animating={this.props.loading}
              size="large"
              color="peru"/>
          } />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.coverReducer.loading,
    books: state.coverReducer.favorites
  }
}

export default connect(mapStateToProps)(Favorite);
