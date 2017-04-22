import React from 'react';
import { connect } from 'react-redux';
import { fetchArtistSongs } from '../../actions/song_actions';
import { fetchArtistAlbums } from '../../actions/album_actions';
import { songsByArtist, albumsByArtist } from '../../reducers/selectors';

class ArtistContainer extends React.Component {

  componentDidMount() {
    this.props.fetchArtistSongs(this.props.params.artistId);
    this.props.fetchArtistAlbums(this.props.params.artistId);
  }

  render() {
    return(
      <div></div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    songs: songsByArtist(state, ownProps.params.artistId),
    albums: albumsByArtist(state, ownProps.params.artistId)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchArtistSongs: (artistId) => dispatch(fetchArtistSongs(artistId)),
  fetchArtistAlbums: (artistId) => dispatch(fetchArtistAlbums(artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);
