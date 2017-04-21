import React from 'react';
import { connect } from 'react-redux';
import { arrayAllSongs } from '../../reducers/selectors';
import { fetchAllSongs } from '../../actions/song_actions';

class SongsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllSongs();
  }

  render() {
    return(
      <div>
        <h1>Song List Here</h1>
        <ul>
          {
            this.props.songs.map(song => <li>{ song.title }</li>)
          }
        </ul>
      </div>
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

  return { songs };
};

const mapDispatchToProps = dispatch => ({
  fetchAllSongs: () => dispatch(fetchAllSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(SongsIndex);
