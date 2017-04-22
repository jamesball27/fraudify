import React from 'react';
import SongModal from './song_modal';

const SongIndexItem = ({ song, fetching, playlists, createPlaylistSong }) => {
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
    return(
      <li>
        <h4>{ song.title }</h4>
        <h5>{ song.artist } • { song.album }</h5>

        <SongModal playlists={ playlists } createPlaylistSong={ createPlaylistSong } songId={ song.id } />
        <h6>{ parseDuration(song.duration) }</h6>
      </li>
    );
  }
};

export default SongIndexItem;
