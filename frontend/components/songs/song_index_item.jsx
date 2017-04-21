import React from 'react';

const SongIndexItem = ({ song, fetching, playlists }) => {
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

        <select>
          <option disabled="true" selected="true">Add Song to Playlist</option>
          {
            playlists.map(playlist => <option key={ playlist.id }>{ playlist.name }</option>)
          }
        </select>

        <h6>{ parseDuration(song.duration) }</h6>
      </li>
    );
  }
};

export default SongIndexItem;
