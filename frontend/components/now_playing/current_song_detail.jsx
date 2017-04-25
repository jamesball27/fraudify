import React from 'react';

const CurrentSongDetail = ({ currentSong }) => {
  if (currentSong) {
    let title = currentSong.title;

    if (currentSong.title.length > 35) {
      title = currentSong.title.slice(0, 40) + '...';
    }
    return(
      <div className='current-song-detail'>
        <h5 title={currentSong.title}>{ title }</h5>
        <h6>{ currentSong.artist }</h6>
        <h6>{ currentSong.album }</h6>
      </div>
    );
  } else {
    return(
      <div className='current-song-detail'></div>
    );
  }
};

export default CurrentSongDetail;
