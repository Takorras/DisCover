import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Modal, Image, TouchableOpacity, View, Linking, ToastAndroid } from 'react-native';
import { closeModal } from '../../actions';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  image: {
    flex: 1
  },
  footer: {
    width: "100%",
    height: 48,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 32,
    height: 32,
    marginLeft: 24,
    marginBottom: 24,
    tintColor: "chocolate"
  }
})

class ImageModal extends React.Component {
  trimUrl = (url) => url ? `${url.split('&')[0]}&printsec=frontcover&img=1` : url

  render() {
    return (
      <Modal
        visible={this.props.modalOpen}
        animationType={'slide'}
        onRequestClose={() => this.props.closeModal()}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => this.props.closeModal()}>
          <Image
            style={styles.image}
            resizeMode='contain'
            source={{ uri: this.trimUrl(this.props.coverImageUrl) }}/>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => Linking.openURL(this.props.bookInfoUrl)}>
            <Image
              style={styles.button}
              resizeMode='contain'
              source={require('./info.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.addFavorite(this.props.book)}>
            <Image
              style={styles.button}
              resizeMode='contain'
              source={require('./favorite.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.saveImage(this.trimUrl(this.props.coverImageUrl))}>
            <Image
              style={styles.button}
              resizeMode='contain'
              source={require('./save.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.closeModal()}>
            <Image
              style={styles.button}
              resizeMode='contain'
              tintColor="chocolate"
              source={require('./close.png')} />
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    modalOpen: state.modalReducer.modalOpen,
    book: state.modalReducer.book,
    bookInfoUrl: state.modalReducer.book ? state.modalReducer.book.infoLink : '',
    coverImageUrl: state.modalReducer.book ? state.modalReducer.book.imageLinks.thumbnail : ''
  };
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    addFavorite: book => dispatch({ type: 'ADD_FAVORITE', book: book }),
    saveImage: coverImageUrl => dispatch({ type: 'SAVE_IMAGE', url: coverImageUrl })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageModal);
