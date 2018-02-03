import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import Cover from '../Covers/Cover';
import { openModal } from '../../actions';
import ImageModal from '../Home/ImageModal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 2,
    paddingLeft: 2
  }
})

class Favorite extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={3}
          data={this.props.books}
          keyExtractor={(_, index) => index}
          renderItem={item => <Cover book={item.item} onClick={()=>this.props.openModal(item.item)}/>}
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
    books: state.coverReducer.favorites
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: book => dispatch(openModal(book))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
