import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import Cover from './Cover';
import { openModal } from '../../actions';
import ImageModal from '../Home/ImageModal';

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

class Covers extends React.Component {
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
          keyExtractor={(_, index) => index}
          renderItem={item => <Cover book={item.item} onClick={()=>this.props.openModal(item.item.volumeInfo.imageLinks.thumbnail)}/>}
          onEndReached={info => this.onEndReached()}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            <ActivityIndicator
              style={styles.indicator}
              animating={this.props.loading}
              size="large"
              color="peru"/>
          } />
        <ImageModal/>
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
    fetchCovers: query => dispatch({ type: 'FETCH_COVER_REQUESTED', query: "ゆるキャン" }),
    openModal: url => dispatch(openModal(url))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Covers);
