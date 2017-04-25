import React from 'React';

const CurrentSongDetail = ({ currentSong }) => {
  if (currentSong) {
    return(
      <div>
        <h6>{ currentSong.title }</h6>
        <h6>{ currentSong.artist }</h6>
        <h6>{ currentSong.album }</h6>
      </div>
    );
  } else {
    return(
      <div></div>
    );
  }
};

export default CurrentSongDetail;
