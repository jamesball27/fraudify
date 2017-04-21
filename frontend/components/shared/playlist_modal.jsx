import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

class PlaylistModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: false, playlist: { name: '' } };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleInput(e) {
    this.setState({ playlist: { name: e.target.value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { modalType, router, modalSubmit, params } = this.props;
    const playlist = params ? { id: params.playlistId, name: this.state.playlist.name } : this.state.playlist;
    if (modalType === 'updatePlaylist' || modalType === 'createPlaylist') {
      modalSubmit(playlist)
        .then(resPlaylist => {
          this.closeModal();
          router.push(`/playlists/${resPlaylist.id}`);
        });
    } else {
      modalSubmit(params.playlistId).then(router.push('/mymusic/playlists'));
    }
  }

  render() {
    let input = <input
              type="text"
              onChange={ this.handleInput }
              value={ this.state.name }
              placeholder="Playlist name"
            />;
    let buttonText, headerText;
    switch(this.props.modalType) {
      case 'createPlaylist':
        buttonText = 'New Playlist';
        headerText = 'Create a new Playlist';
        break;
      case 'updatePlaylist':
        buttonText = 'Rename';
        headerText = 'Rename Playlist';
        break;
      case 'deletePlaylist':
        buttonText = 'Delete';
        headerText = 'Are you sure you want to delete this playlist?';
        input = null;
        break;
    }

    return(
      <div>
        <button
          onClick={ this.openModal }
          className="modal-entry-button button green"
        >
          { buttonText }
        </button>
        <Modal
          isOpen={ this.state.modalIsOpen }
          onRequestClose={ this.closeModal }
          className="playlist-modal"
          contentLabel="Playlist Modal"
        >
          <span onClick={ this.closeModal }>╳</span>
          <h1>{ headerText }</h1>
          <form onSubmit={ this.handleSubmit }>
            { input }
            <button className="button green modal-button">{ buttonText }</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(PlaylistModal);
