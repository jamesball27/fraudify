import React from 'react';
import PlaylistModal from '../shared/playlist_modal';
const CollectionDetail = props => {
  return(
    <section className="collection-detail">
      <img src={ props.collectionItem.image_url } />
      <h1>{ props.collectionItem.name }</h1>
      <h2>By: {props.collectionItem.creator }</h2>
      <h5>{ `${props.collectionItem.songs.length}` } songs</h5>
      <PlaylistModal modalSubmit={ props.updatePlaylist } modalType="updatePlaylist" />
      <PlaylistModal modalSubmit={ props.deletePlaylist } modalType="deletePlaylist" />
    </section>
  );
};


export default CollectionDetail;
