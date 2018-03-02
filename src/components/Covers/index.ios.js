import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ActivityIndicator } from 'react-native';
import randomWord from 'random-words';
import CoversList from './CoversList';
import { openModal } from '../../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 2,
    paddingLeft: 2
  },
  indicator: {
    margin: 16
  }
});

class Covers extends React.Component {
  componentDidMount() {
    this.props.fetchCovers(randomWord());
  }

  onEndReached() {
    if (!this.props.loading) this.props.fetchCovers(randomWord());
  }

  render() {
    return (
      <CoversList
        data={this.props.books}
        onClick={this.props.openModal}
        onEndReached={() => this.onEndReached()}
        listFooterComponent={
          <ActivityIndicator
            style={styles.indicator}
            animating={this.props.loading}
            size="large"
            color="peru"/>}
      />
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
    fetchCovers: query => dispatch({ type: 'FETCH_COVER_REQUESTED', query: query }),
    openModal: book => dispatch(openModal(book))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Covers);
