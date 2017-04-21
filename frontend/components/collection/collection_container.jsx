import React from 'react';
import { connect } from 'react-redux';
import CollectionDetail from './collection_detail';
import { updatePlaylist, deletePlaylist } from '../../actions/playlist_actions';

const CollectionContainer = (props) => {
  return(
    <main className="collection-container">
      <CollectionDetail
        collectionItem={ props.collectionItem }
        updatePlaylist={ props.updatePlaylist }
        deletePlaylist={ props.deletePlaylist }
      />
      <h1>Song list will go here</h1>
    </main>
  );
};

const mapStateToProps = (store, ownProps) => {
  let collectionType, collectionItem;
  if (ownProps.route.path.startsWith('playlists')) {
    collectionType = 'playlist';
    collectionItem = store.playlists[ownProps.params.playlistId];
  } else {
    collectionType = 'album';
    collectionItem = store.albums[ownProps.params.albumId];
  }

  return { collectionType, collectionItem };
};

const mapDispatchToProps = dispatch => ({
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
  deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionContainer);
