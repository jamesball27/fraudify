import React from 'react';
import { connect } from 'react-redux';
import CollectionDetail from './collection_detail';
import { updatePlaylist, deletePlaylist, fetchPlaylist } from '../../actions/playlist_actions';
import { fetchSongs, fetchAlbumSongs, fetchPlaylistSongs } from '../../actions/song_actions';
import SongsIndex from '../songs/songs_index';
import { addCollectionToQueue, clearPlayQueue } from '../../actions/play_queue_actions';
import { fetchAlbum } from '../../actions/album_actions';

class CollectionContainer extends React.Component {

  componentWillMount() {
    if (!this.props.fetching) {
      if (this.props.collectionType === 'playlist') {
        this.props.fetchPlaylist(this.props.params.playlistId)
          .then(() => {
            this.props.fetchSongs(this.props.params.playlistId);
          });
      } else {
        this.props.fetchAlbum(this.props.params.albumId)
          .then(() => {
            this.props.fetchSongs(this.props.params.albumId);
          });
      }
    }
  }


  render() {
    if (this.props.collectionItem) {
      return(
        <main className="collection-container">
          <CollectionDetail
            collectionType={ this.props.collectionType }
            collectionItem={ this.props.collectionItem }
            updatePlaylist={ this.props.updatePlaylist }
            deletePlaylist={ this.props.deletePlaylist }
            createdByCurrentUser={ this.props.createdByCurrentUser }
            playCollection={ this.props.playCollection }
            songsInState={ this.props.songs }
            clearPlayQueue={ this.props.clearPlayQueue }
            />
          <SongsIndex
            collectionPage="true"
            songs={ this.props.collectionItem.songs }
            playlistByCurrentUser={ this.props.createdByCurrentUser }/>
        </main>
      );
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = (store, ownProps) => {
  let collectionType, collectionItem;
  let createdByCurrentUser = false;
  const { currentUser } = store.session;

  if (ownProps.route.path.startsWith('playlists')) {
    collectionType = 'playlist';
    collectionItem = store.playlists[ownProps.params.playlistId];
    if (collectionItem) {
      if (currentUser && collectionItem.creator === currentUser.username) {
        createdByCurrentUser = true;
      }
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
  fetchSongs: (collectionId) => {
      if (ownProps.route.path.startsWith('album')) {
        dispatch(fetchAlbumSongs(collectionId));
      } else if (ownProps.route.path.startsWith('playlist')) {
        dispatch(fetchPlaylistSongs(collectionId));
      } else {
        dispatch(fetchSongs());
      }
    },
  playCollection: (collection) => dispatch(addCollectionToQueue(collection)),
  clearPlayQueue: () => dispatch(clearPlayQueue()),
  fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionContainer);
