import React from 'react';
import PlaylistModal from '../shared/playlist_modal';

const CollectionDetail = props => {
  let modals;
  if (props.createdByCurrentUser) {
    modals =
      <div>
        <PlaylistModal modalSubmit={ props.updatePlaylist } modalType="updatePlaylist" />
        <PlaylistModal modalSubmit={ props.deletePlaylist } modalType="deletePlaylist" />
      </div>;
  }

  const playCollection = (e) => {
    props.clearPlayQueue();
    const songs = props.collectionItem.songs.map(songId => props.songsInState[songId]);
    props.playCollection(songs);
  };

  return(
    <section className="collection-detail">
      <img src={ props.collectionItem.image_url } />
      <h1>{ props.collectionItem.name || props.collectionItem.title }</h1>
      <h2>By: {props.collectionItem.creator || props.collectionItem.artist }</h2>
      <h5>{ `${props.collectionItem.songs.length}` } songs</h5>
      <button onClick={ playCollection }>Play</button>
      { modals }
    </section>
  );
};


export default CollectionDetail;
