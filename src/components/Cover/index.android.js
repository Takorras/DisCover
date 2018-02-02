import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import CoverItem from './CoverItem';
import { fetchCovers } from '../../actions/coverAction.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    flexWrap: "wrap"
  },
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

class Cover extends React.Component {
  componentDidMount() {
    this.props.fetchCovers();
  }

  render() {
    return (
      <View style={styles.container}>
        { this.props.loading?
          (
            <ActivityIndicator style={styles.indicator} size="large" color="peru"/>
          ) : (
            <View style={styles.container}/>
          )
        }
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { loading: state.coverReducer.loading };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCovers: query => dispatch({ type: 'FETCH_COVER_REQUESTED' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cover);
