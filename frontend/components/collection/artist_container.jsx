import React from 'react';
import { connect } from 'react-redux';
import { fetchArtistSongs } from '../../actions/song_actions';
import { fetchArtistAlbums } from '../../actions/album_actions';
import { songsByArtist, albumsByArtist } from '../../reducers/selectors';
import ArtistDetail from './artist_detail';
import SongsIndex from '../songs/songs_index';
import CollectionsIndex from '../mymusic/collections_index';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchFollows } from '../../actions/follow_actions';

class ArtistContainer extends React.Component {

  componentWillMount() {
    this.props.fetchFollows();
    this.props.fetchArtist(this.props.params.artistId)
      .then(() => {
        this.props.fetchArtistSongs(this.props.params.artistId);
        this.props.fetchArtistAlbums(this.props.params.artistId);
      });
  }

  // componentDidMount() {
  //   this.props.fetchArtistSongs(this.props.params.artistId);
  //   this.props.fetchArtistAlbums(this.props.params.artistId);
  //   debugger
  // }

  render() {
    return(
      <main className="main-content">
        <div className="artist-container">
          <ArtistDetail artist={ this.props.artist } fetching={ this.props.fetching }/>
          <div className="artist-songs-albums">
            <h2>Songs</h2>
            <SongsIndex collectionPage="true" songs={ this.props.songs } />
            <h2>Albums</h2>
            <CollectionsIndex indexType="albums" albums={ this.props.albums }/>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    songs: songsByArtist(state, ownProps.params.artistId),
    albums: albumsByArtist(state, ownProps.params.artistId),
    artist: state.artists[ownProps.params.artistId],
    fetching: state.fetching
  };
};

const mapDispatchToProps = dispatch => ({
  fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
  fetchArtistSongs: (artistId) => dispatch(fetchArtistSongs(artistId)),
  fetchArtistAlbums: (artistId) => dispatch(fetchArtistAlbums(artistId)),
  fetchFollows: () => dispatch(fetchFollows())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);
