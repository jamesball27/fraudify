import React from 'react';

const SongIndexItem = ({ song, fetching }) => {
  if (fetching) {
    return <div></div>;
  } else {
    return(
      <li>
        <h4>{ song.title }</h4>
        <h5>{ song.artist } • { song.album }</h5>
        <h6>{ song.duration }</h6>
      </li>
    );
  }
};

export default SongIndexItem;
