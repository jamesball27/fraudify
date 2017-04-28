import React from 'react';
import PlaylistModal from '../shared/playlist_modal';
import FollowButton from '../shared/follow_button';

const CollectionDetail = props => {
  let userSpecific;
  if (props.createdByCurrentUser) {
    userSpecific =
      <div className="modals">
        <PlaylistModal modalSubmit={ props.updatePlaylist } modalType="updatePlaylist" playlist={ props.collectionItem }/>
        <PlaylistModal modalSubmit={ props.deletePlaylist } modalType="deletePlaylist" />
      </div>;
  } else if (props.collectionType === 'playlist'){
    userSpecific =
      <div className="follow-div">
        <FollowButton followableType="Playlist" />
      </div>;
  }

  const playCollection = (e) => {
    props.clearPlayQueue();
    const songs = props.collectionItem.songs.map(songId => props.songsInState[songId]);
    props.playCollection(songs);
  };

  return(
    <section className="collection-detail">
      <img src={ props.collectionItem.imageUrl } />
      <h1>{ props.collectionItem.name || props.collectionItem.title }</h1>
      <h2>By: {props.collectionItem.creator || props.collectionItem.artist }</h2>
      <h5>{ `${props.collectionItem.songs.length}` } songs</h5>
      <div className="play-div">
        <button onClick={ playCollection } className="button green play">Play</button>
      </div>
      { userSpecific }
    </section>
  );
};


export default CollectionDetail;
