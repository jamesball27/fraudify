import React from 'react';
import { connect } from 'react-redux';
import { arrayAllSongs } from '../../reducers/selectors';
import { fetchAllSongs } from '../../actions/song_actions';
import { createPlaylistSong } from '../../actions/playlist_song_actions';
import SongIndexItem from './song_index_item';
import { arrayAllPlaylists } from '../../reducers/selectors';

class SongsIndex extends React.Component {

  componentDidMount() {
    if (!this.props.playlistPage) {
      this.props.fetchAllSongs();
    }
  }

  render() {
    return(
      <ul>
        {
          this.props.songs.map((song, idx) => (
              <SongIndexItem
                key={ idx }
                song={ song }
                fetching={ this.props.fetching }
                playlists={ this.props.playlists }
                createPlaylistSong={ this.props.createPlaylistSong }
              />
            )
          )
        }
      </ul>
    );
  }

}

const mapStateToProps = (store, ownProps) => {
  let songs;
  if (ownProps.playlistPage === 'true') {
    songs = ownProps.songs.map(songId => store.songs[songId]);
  } else {
    songs = arrayAllSongs(store);
  }

  return {
    songs,
    fetching: store.fetching,
    playlists: arrayAllPlaylists(store)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllSongs: () => dispatch(fetchAllSongs()),
  createPlaylistSong: (playlistSong) => dispatch(createPlaylistSong(playlistSong))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongsIndex);
