import React from 'react';
import { connect } from 'react-redux';
import { fetchArtistSongs } from '../../actions/song_actions';
import { fetchArtistAlbums } from '../../actions/album_actions';
import { songsByArtist, albumsByArtist } from '../../reducers/selectors';
import ArtistDetail from './artist_detail';
import SongsIndex from '../songs/songs_index';
import CollectionsIndex from '../mymusic/collections_index';

class ArtistContainer extends React.Component {

  componentDidMount() {
    this.props.fetchArtistSongs(this.props.params.artistId);
    this.props.fetchArtistAlbums(this.props.params.artistId);
  }

  render() {
    return(
      <main className="main-content artist-container">
        <ArtistDetail artist={ this.props.artist }/>
        <h2>Songs</h2>
        <SongsIndex collectionPage="true" songs={ this.props.songs } />
        <h2>Albums</h2>
        <CollectionsIndex indexType="albums" albums={ this.props.albums }/>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    songs: songsByArtist(state, ownProps.params.artistId),
    albums: albumsByArtist(state, ownProps.params.artistId),
    artist: state.artists[ownProps.params.artistId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchArtistSongs: (artistId) => dispatch(fetchArtistSongs(artistId)),
  fetchArtistAlbums: (artistId) => dispatch(fetchArtistAlbums(artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);
