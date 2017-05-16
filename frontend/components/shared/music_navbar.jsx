import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import PlaylistModal from './playlist_modal';

class MusicNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.isActive = this.isActive.bind(this);
  }

  isActive(routeName) {
    return this.props.router.isActive(routeName) ? 'active' : '';
  }

  render() {

    const { path, createPlaylist } = this.props;
    let newPlaylist;
    if (path === 'mymusic') {
      newPlaylist = <PlaylistModal modalSubmit={ createPlaylist } modalType="createPlaylist"/>;
    }

    return(
      <nav className="music-nav">
        <ul>
          <li><Link to={ '/' + path + '/playlists' } className={ this.isActive(`${path}/playlists`)}>Playlists</Link></li>
          <li><Link to={ '/' + path + '/songs' } className={ this.isActive(`${path}/songs`)}>Songs</Link></li>
          <li><Link to={ '/' + path + '/albums' } className={ this.isActive(`${path}/albums`)}>Albums</Link></li>
          <li><Link to={ '/' + path + '/artists' } className={ this.isActive(`${path}/artists`)}>Artists</Link></li>
        </ul>
        { newPlaylist }
      </nav>
    );
  }
}

export default withRouter(MusicNavbar);
