import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists, createPlaylist, receiveUserPlaylists } from '../../actions/playlist_actions';
import MusicNavbar from '../shared/music_navbar';
import { fetchSongs } from '../../actions/song_actions';
import { fetchFollows } from '../../actions/follow_actions';

class MyMusic extends React.Component {

  componentWillMount() {
    this.props.fetchPlaylists()
      .then(() => this.props.fetchFollows())
      .then(() => this.props.fetchSongs());
  }

  componentDidUpdate() {
    if (!this.props.currentUser) {
      this.props.router.push('/home');
    }
  }

  render() {
    return(
      <main className="main-content">
        <MusicNavbar
          path={ this.props.route.path }
          createPlaylist={ this.props.createPlaylist }
        />

        { this.props.children }
      </main>
    );
  }
}

const mapStateToProps = store => ({
  currentUser: store.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
  fetchSongs: () => dispatch(fetchSongs()),
  fetchFollows: () => dispatch(fetchFollows()),
  receiveUserPlaylists: (playlists) => dispatch(receiveUserPlaylists(playlists))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMusic);
