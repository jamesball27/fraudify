import React from 'react';
import { connect } from 'react-redux';
import { arrayAllPlaylists, arrayAllAlbums, arrayAllArtists } from '../../reducers/selectors';
import CollectionsIndexItem from './collections_index_item';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';

class CollectionsIndex extends React.Component {

  componentWillReceiveProps(newProps) {
    if (this.props.route.path !== newProps.route.path) {
      switch(newProps.indexType) {
        case 'playlists':
          this.props.fetchPlaylists();
          break;
        case 'albums':
          this.props.fetchAlbums();
          break;
        case 'artists':
          this.props.fetchArtists();
      }
    }
  }

  renderIndex(indexItems) {
    return(
      indexItems.map(item => (
        <CollectionsIndexItem
          key={ item.id }
          item={ item }
          type={ this.props.indexType }
          />
        )
      )
    );
  }

  render() {
    const { playlists, albums, artists } = this.props;
    let indexItems;
    switch(this.props.indexType) {
      case 'playlists':
        indexItems = playlists;
        break;
      case 'albums':
        indexItems = albums;
        break;
      case 'artists':
        indexItems = artists;
        break;
    }

    return(
      <section className="collections-index">
        <ul>
          { this.renderIndex(indexItems) }
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const indexType = ownProps.route.path;

  return {
    playlists: arrayAllPlaylists(state),
    albums: arrayAllAlbums(state),
    artists: arrayAllArtists(state),
    indexType
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchArtists: () => dispatch(fetchArtists())
});
export default connect(mapStateToProps, mapDispatchToProps)(CollectionsIndex);
