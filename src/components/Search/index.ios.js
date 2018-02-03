import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ActivityIndicator, TextInput } from 'react-native';
import CoversList from '../Covers/CoversList';
import { openModal, editQuery } from '../../actions';

const styles = StyleSheet.create({
  indicator: {
    margin: 16
  },
  input: {
    height: 40,
    marginLeft: 8,
    marginRight: 8,
  }
})

class Search extends React.Component {
  onEndReached() {
    if (this.props.query) this.props.fetchCovers();
  }

  render() {
    return (
      <CoversList
        data={this.props.books}
        onClick={this.props.openModal}
        onEndReached={() => this.onEndReached()}
        listHeaderComponent={
          <TextInput
            style={styles.input}
            placeholder="Keyword..."
            onChangeText={text => this.props.editQuery(text)}
            onSubmitEditing={() => this.props.fetchCovers(this.props.query)} />
        }
        listFooterComponent={
          <ActivityIndicator
            style={styles.indicator}
            animating={this.props.loading}
            size="large"
            color="peru"/>
        }
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.searchReducer.loading,
    books: state.searchReducer.books,
    query: state.searchReducer.query
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCovers: query => dispatch({ type: 'FETCH_SEARCH_COVER_REQUESTED', query: query }),
    openModal: book => dispatch(openModal(book)),
    editQuery: text => dispatch(editQuery(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
