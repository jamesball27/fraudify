import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists, createPlaylist } from '../../actions/playlist_actions';
import MusicNavbar from '../shared/music_navbar';

class MyMusic extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  componentDidUpdate() {
    if (!this.props.currentUser) {
      this.props.router.push('/login');
    }
  }

  render() {
    return(
      <div>
        <h1>MY MUSIC</h1>
        <MusicNavbar
          path={ this.props.location.pathname }
          createPlaylist={ this.props.createPlaylist }
        />

        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = store => ({
  currentUser: store.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  createPlaylist: (playlistName) => dispatch(createPlaylist(playlistName))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMusic);
