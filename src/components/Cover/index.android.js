import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import CoverItem from './CoverItem';
import { fetchCovers } from '../../actions/coverAction.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 2,
    paddingLeft: 2
  },
  indicator: {
    margin: 16
  }
})

class Cover extends React.Component {
  componentDidMount() {
    this.props.fetchCovers();
  }

  onEndReached() {
    if (!this.props.loading) this.props.fetchCovers();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={3}
          data={this.props.books}
          renderItem={item => <CoverItem book={item.item.volumeInfo}/>}
          onEndReached={info => this.onEndReached()}
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
    books: state.coverReducer.books
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCovers: query => dispatch({ type: 'FETCH_COVER_REQUESTED', query: "art" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cover);
