import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Modal, Image, TouchableOpacity } from 'react-native';
import { closeModal } from '../../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 32
  },
  image: {
    width: "100%",
    height: "100%"
  }
})

class ImageModal extends React.Component {
  trimUrl = (url) => url ? `${url.split('&')[0]}&printsec=frontcover&img=1` : url

  render() {
    return (
      <Modal
        style={styles.container}
        visible={this.props.modalOpen}
        animationType={'slide'}
        onRequestClose={() => this.props.closeModal()}>
        <TouchableOpacity
          onPress={() => this.props.closeModal()}
          onLongPress={() => {}}>
          <Image
            style={styles.image}
            resizeMode='contain'
            source={{ uri: this.trimUrl(this.props.modalImageUrl) }}/>
        </TouchableOpacity>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    modalOpen: state.coverReducer.modalOpen,
    modalImageUrl: state.coverReducer.modalImageUrl
  };
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageModal);
