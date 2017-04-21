import React from 'react';
import { connect } from 'react-redux';
import CollectionDetail from './collection_detail';
import { updatePlaylist, deletePlaylist } from '../../actions/playlist_actions';
import SongsIndex from '../songs/songs_index';

const CollectionContainer = (props) => {
  return(
    <main className="collection-container">
      <CollectionDetail
        collectionItem={ props.collectionItem }
        updatePlaylist={ props.updatePlaylist }
        deletePlaylist={ props.deletePlaylist }
        createdByCurrentUser={ props.createdByCurrentUser }
      />
      <SongsIndex />
    </main>
  );
};

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
    createdByCurrentUser
  };
};

const mapDispatchToProps = dispatch => ({
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
  deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionContainer);
