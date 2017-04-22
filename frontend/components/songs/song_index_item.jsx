import React from 'react';
import SongModal from './song_modal';
import { withRouter } from 'react-router';

const SongIndexItem = ({ song, fetching, playlists, createPlaylistSong, router }) => {
  const parseDuration = (duration) => {

    const minutes = Math.floor(duration / 60);
    const seconds = duration - (minutes * 60);

    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${minutesString}:${secondsString}`;
  };



  if (fetching) {
    return <div></div>;
  } else {
    let artistAlbum;
    if (!router.location.pathname.startsWith('/albums')) {
      artistAlbum =
        <h5>
          { song.artist }
          <span>•</span>
          { song.album }
        </h5>;
    }
    
    return(
      <li className="songs-index-item">
        <div className="song-item-left">
          <h4>{ song.title }</h4>
          { artistAlbum }
        </div>

        <div className="song-item-right">
          <SongModal
            playlists={ playlists }
            createPlaylistSong={ createPlaylistSong }
            songId={ song.id }
          />
          <h6>{ parseDuration(song.duration) }</h6>
        </div>
      </li>
    );
  }
};

export default withRouter(SongIndexItem);
