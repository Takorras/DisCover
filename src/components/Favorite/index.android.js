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
  render() {
    return (
      <CoversList
        data={this.props.books}
        onClick={this.props.openModal}
        listFooterComponent={
          <ActivityIndicator
            style={styles.indicator}
            animating={this.props.loading}
            size="large"
            color="peru"/>
        }/>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.coverReducer.loading,
    books: state.coverReducer.favorites
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: book => dispatch(openModal(book))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
