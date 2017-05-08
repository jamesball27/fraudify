import React from 'react';
import SongModal from './song_modal';
import { withRouter } from 'react-router';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handlePlayClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.clearPlayQueue();
    this.props.addSongToTopOfQueue(this.props.song);
  }

  handleDeleteClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const playlistSong = {
      playlist_id: parseInt(this.props.params.playlistId),
      song_id: this.props.song.id
    };

    this.props.deletePlaylistSong(playlistSong);
  }

  render() {
    if (this.props.fetching) {
      return <div></div>;
    }
    let artistAlbum;
    if (!this.props.router.location.pathname.startsWith('/albums')) {
      artistAlbum =
      <h5>
        { this.props.song.artist }
        <span>•</span>
        { this.props.song.album }
      </h5>;
    }

    let deletePlaylistSong;
    if (this.props.playlistByCurrentUser && this.props.params.playlistId) {
      deletePlaylistSong = <button onClick={ this.handleDeleteClick } title="Remove Song from Playlist">-</button>;
    }

    return(
      <li className="songs-index-item">
        <div className="song-item-left">
          <h4>{ this.props.song.title }</h4>
          { artistAlbum }
        </div>

        <div className="song-item-right">
          { deletePlaylistSong }
          <img src={ window.images.play } onClick={ this.handlePlayClick } />
          <SongModal
            playlists={ this.props.playlists }
            createPlaylistSong={ this.props.createPlaylistSong }
            songId={ this.props.song.id }
            />
        </div>
      </li>
    );
  }
}

export default withRouter(SongIndexItem);
