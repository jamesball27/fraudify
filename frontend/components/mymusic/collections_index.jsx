import React from 'react';
import { connect } from 'react-redux';
import { arrayAllPlaylists, arrayAllAlbums, arrayAllArtists } from '../../reducers/selectors';
import CollectionsIndexItem from './collections_index_item';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';

class CollectionsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props.indexType);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.route) {
      if (this.props.route.path !== newProps.route.path) {
        this.fetchData(newProps.indexType);
      }
    }
  }

  fetchData(indexType) {
    switch(indexType) {
      case 'playlists':
        this.props.fetchPlaylists();
        break;
      case 'albums':
        this.props.fetchAlbums();
        break;
      case 'artists':
        this.props.fetchArtists();
        break;
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
  let indexType = ownProps.indexType;
  if (ownProps.route) {
    indexType = ownProps.route.path;
  }

  let albums;
  if (ownProps.album) {
    albums = ownProps.albums.map(albumId => state.albums[albumId]);
  } else {
    albums = arrayAllAlbums(state);
  }

  return {
    playlists: arrayAllPlaylists(state),
    albums,
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
