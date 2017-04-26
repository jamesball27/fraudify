import React from 'react';
import { connect } from 'react-redux';
import { arrayAllSongs, playlistsByCurrentUser, currentUserSongs } from '../../reducers/selectors';
import { fetchSongs } from '../../actions/song_actions';
import { createPlaylistSong } from '../../actions/playlist_song_actions';
import SongIndexItem from './song_index_item';
import { addSongToTopOfQueue } from '../../actions/play_queue_actions';

class SongsIndex extends React.Component {

  // componentDidMount() {
  //   this.props.fetchSongs();
  // }

  render() {
    return(
      <ol className="songs-index">
        {
          this.props.songs.map((song, idx) => (
              <SongIndexItem
                key={ idx }
                song={ song }
                fetching={ this.props.fetching }
                playlists={ this.props.playlists }
                createPlaylistSong={ this.props.createPlaylistSong }
                addSongToTopOfQueue={ this.props.addSongToTopOfQueue }
              />
            )
          )
        }
      </ol>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  const playlists = playlistsByCurrentUser(state, state.session.currentUser.username);

  let songs;
  if (ownProps.collectionPage === 'true') {
    songs = ownProps.songs.map(songId => state.songs[songId]);
  } else if (ownProps.search === 'true') {
    songs = arrayAllSongs(state.searchResults);
  } else {
    songs = currentUserSongs(state, playlists, state.session.currentUser.username);
  }


  return {
    songs,
    fetching: state.fetching,
    playlists
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  createPlaylistSong: (playlistSong) => dispatch(createPlaylistSong(playlistSong)),
  addSongToTopOfQueue: (song) => dispatch(addSongToTopOfQueue(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongsIndex);
