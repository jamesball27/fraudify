import React from 'react';
import { connect } from 'react-redux';
import CollectionDetail from './collection_detail';
import { updatePlaylist, deletePlaylist } from '../../actions/playlist_actions';
import { fetchAllSongs } from '../../actions/song_actions';
import SongsIndex from '../songs/songs_index';

class CollectionContainer extends React.Component {

  componentWillMount() {
    if (!this.props.fetching) {
      this.props.fetchAllSongs();
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
          />
        <SongsIndex playlistPage="true" songs={ this.props.collectionItem.songs }/>
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
    fetching: store.fetching
  };
};

const mapDispatchToProps = dispatch => ({
  updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
  deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
  fetchAllSongs: () => dispatch(fetchAllSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionContainer);
