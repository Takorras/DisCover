import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList, ActivityIndicator, TextInput } from 'react-native';
import Cover from '../Covers/Cover';
import { openModal, editQuery } from '../../actions';
import ImageModal from '../Home/ImageModal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 2,
    paddingLeft: 2
  },
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
    if (!this.props.loading) this.props.fetchCovers();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={3}
          data={this.props.books}
          keyExtractor={(_, index) => index}
          renderItem={item => <Cover book={item.item} onClick={()=>this.props.openModal(item.item)}/>}
          onEndReached={info => this.onEndReached()}
          onEndReachedThreshold={0.5}
          ListHeaderComponent={
            <TextInput
              style={styles.input}
              placeholder="Keyword..."
              onChangeText={text => this.props.editQuery(text)}
              onSubmitEditing={() => this.props.fetchCovers(this.props.query)} />
          }
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
