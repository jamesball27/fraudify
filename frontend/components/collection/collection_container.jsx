import React from 'react';
import { connect } from 'react-redux';
import CollectionDetail from './collection_detail';
import { updatePlaylist, deletePlaylist } from '../../actions/playlist_actions';
import { fetchSongs, fetchAlbumSongs } from '../../actions/song_actions';
import SongsIndex from '../songs/songs_index';
import { addCollectionToQueue } from '../../actions/play_queue_actions';

class CollectionContainer extends React.Component {

  componentWillMount() {
    if (!this.props.fetching) {
      this.props.fetchSongs(this.props.params.albumId);
    }
  }

  render() {
    return(
      <main className="collection-container">
        <CollectionDetail
          collectionItem={ this.props.collectionItem }
          updatePlaylist={ this.props.updatePlaylist }
          deletePlaylist={ this.props.deletePlaylist }
          createdByCurrentUser={ this.props.createdByCurrentUser }
          playCollection={ this.props.playCollection }
          songsInState={ this.props.songs }
          />
        <SongsIndex collectionPage="true" songs={ this.props.collectionItem.songs }/>
      </main>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  let collectionType, collectionItem, createdByCurrentUser;
  const { currentUser } = store.session;
  if (ownProps.route.path.startsWith('playlists')) {
    collectionType = 'playlist';
    collectionItem = store.playlists[ownProps.params.playlistId];
    if (currentUser && collectionItem.creator === currentUser.username) {
      createdByCurrentUser = true;
    }
  } else {
    collectionType = 'album';
    collectionItem = store.albums[ownProps.params.albumId];
  }

  return {
    collectionType,
    collectionItem,
    createdByCurrentUser,
    fetching: store.fetching,
    songs: store.songs
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
  deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
  fetchSongs: (albumId) => {
      if (ownProps.route.path.startsWith('album')) {
        dispatch(fetchAlbumSongs(albumId));
      } else {
        dispatch(fetchSongs());
      }
    },
  playCollection: (collection) => dispatch(addCollectionToQueue(collection))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionContainer);
