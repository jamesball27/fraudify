import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

class NewPlaylist extends React.Component {
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
    this.props.createPlaylist(this.state.playlist).then((newPlaylist) => {
      this.closeModal();
      this.props.router.push(`/playlists/${newPlaylist.id}`);
    });
  }

  render() {
    return(
      <div>
        <button onClick={ this.openModal } className="button green">New Playlist</button>
        <Modal
          isOpen={ this.state.modalIsOpen }
          onRequestClose={ this.closeModal }
          className="new-playlist"
          contentLabel="newPlaylist"
        >
          <span onClick={ this.closeModal }>╳</span>
          <h1>Create a new Playlist</h1>
          <form onSubmit={ this.handleSubmit }>
            <input
              type="text"
              onChange={ this.handleInput }
              value={ this.state.name }
              placeholder="Playlist name"
            />
            <button className="button green">Create Playlist</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(NewPlaylist);
