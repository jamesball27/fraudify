import React from 'react';
import { connect } from 'react-redux';
import { arrayAllSongs } from '../../reducers/selectors';
import SongIndexItem from './song_index_item';

class SongsIndex extends React.Component {

  render() {
    return(
      <ul>
        {
          this.props.songs.map((song, idx) => <SongIndexItem key={ idx } song={ song } fetching={ this.props.fetching }/>)
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
    fetching: store.fetching
  };
};

export default connect(mapStateToProps)(SongsIndex);
