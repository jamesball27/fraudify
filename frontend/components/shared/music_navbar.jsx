import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import PlaylistModal from './playlist_modal';

class MusicNavbar extends React.Component {

  render() {

    const { path, createPlaylist } = this.props;
    let newPlaylist;
    if (path === 'mymusic') {
      newPlaylist = <PlaylistModal modalSubmit={ createPlaylist } modalType="createPlaylist"/>;
    }

    return(
      <nav className="music-nav">
        <ul>
          <li><Link to={ path + '/playlists' }>Playlists</Link></li>
          <li><Link to={ path + '/songs' }>Songs</Link></li>
          <li><Link to={ path + '/albums' }>Albums</Link></li>
          <li><Link to={ path + '/artists' }>Artists</Link></li>
        </ul>
        { newPlaylist }
      </nav>
    );
  }
}

export default withRouter(MusicNavbar);
