import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ActivityIndicator } from 'react-native';
import CoversList from '../Covers/CoversList';
import { openModal } from '../../actions';

const styles = StyleSheet.create({
  indicator: {
    margin: 16
  }
})

class Favorite extends React.Component {
  componentDidMount() {
    this.props.fetchFavorite();
  }

  render() {
    return (
      <CoversList
        data={this.props.books}
        onClick={this.props.openModal}
        onEndReached={() => {}}
      />
    )
  }
}

const mapStateToProps = state => {
  return { books: state.favoriteReducer.books };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFavorite: () => dispatch({ type: 'FETCH_FAVORITE' }),
    openModal: book => dispatch(openModal(book))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
