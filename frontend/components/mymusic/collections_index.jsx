import React from 'react';
import { connect } from 'react-redux';
import { arrayAllPlaylists, arrayAllAlbums, arrayAllArtists, playlistsByCurrentUser } from '../../reducers/selectors';
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
    if (this.props.search !== 'true') {
      this.fetchData(this.props.indexType);
    }
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
    let emptyText = "There isn't anything here!";
    switch(this.props.indexType) {
      case 'playlists':
        indexItems = playlists;
        emptyText += " Create or follow playlists to add them to your music.";
        break;
      case 'albums':
        indexItems = albums;
        emptyText += " Add songs to your playlists to add their albums to your music.";
        break;
      case 'artists':
        indexItems = artists;
        emptyText += " Follow artists to add them to your music.";
        break;
    }

    if (Object.keys(indexItems).length === 0) {
      return(
        <section className="collections-index">
          <h2>{ emptyText }</h2>
        </section>
      );
    } else {
      return(
        <section className="collections-index">
          <ul>
            { this.renderIndex(indexItems) }
          </ul>
        </section>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  let playlists = arrayAllPlaylists(state);
  let artists = arrayAllArtists(state);
  let albums = arrayAllAlbums(state);
  let username;

  if (state.session.currentUser) {
    username = state.session.currentUser.username;
  }

  if (ownProps.search === 'true') {
    if (Object.keys(state.searchResults).length !== 0) {
      playlists = arrayAllPlaylists(state.searchResults);
      albums = arrayAllAlbums(state.searchResults);
      artists = arrayAllArtists(state.searchResults);
    } else {
      playlists = [];
      albums = [];
      artists = [];
    }
  } else {
    playlists = arrayAllPlaylists(state);

  }

  let indexType = ownProps.indexType;
  if (ownProps.route) {
    indexType = ownProps.route.path;
  }

  if (ownProps.album) {
    albums = ownProps.albums.map(albumId => state.albums[albumId]);
  }

  return {
    playlists,
    albums,
    artists,
    indexType
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsIndex);
