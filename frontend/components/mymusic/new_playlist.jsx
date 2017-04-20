import React from 'react';

class NewPlaylist extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: false, newPlaylist: '' };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleInput(e) {
    this.setState({ newPlaylist: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

  }
  
  render() {
    return(
      <div>
        <button onClick={ this.openModal }>New Playlist</button>;
        <Modal
          isOpen={ this.state.modalIsOpen }
          onRequestClose={ this.closeModal }
          className="new-playlist"
          contentLabel="newPlaylist"
        >
          <form>
            <input
              type="text"
              onChange={ this.handleInput }
              value={ this.state.newPlaylist }
            />
            <button>Create Playlist</button>
          </form>
      </Modal>
    </div>
    );
  }
}

export default NewPlaylist;
