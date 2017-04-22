import React from 'react';
import Modal from 'react-modal';

class SongModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleClick(playlist_id) {
    return (e) => {
      // for some reason a click on the button to open the modal caused
      // an infinite loop of creating playlistSongs
      // e.stopPropagation();
      this.props.createPlaylistSong({ playlist_id, song_id: this.props.songId })
        .then(this.closeModal);
    };
  }

  render() {
    return(
      <div>
        <button
          onClick={ this.openModal }
          title="Add to playlist"
        >+</button>
        <Modal
          isOpen={ this.state.modalIsOpen }
          onRequestClose={ this.closeModal }
          className="song-modal"
          contentLabel="Song Modal"
        >
          <span onClick={ this.closeModal }>╳</span>
          <h1>Add to playlist</h1>
          <ul>
            {
              this.props.playlists.map(playlist => {
                return(
                  <li className="collection-detail" onClick={ this.handleClick(playlist.id) }>
                    <img src={ playlist.image_url } />
                    <h2>{ playlist.name }</h2>
                    <h4>By: {playlist.creator }</h4>
                    <h6>{ `${playlist.songs.length}` } songs</h6>
                  </li>
                );
              })
            }
          </ul>
        </Modal>
      </div>
    );
  }
}

export default SongModal;
