export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
// export const RECEIVE_NEXT_SONG = 'RECEIVE_NEXT_SONG';

export const receiveCurrentSong = (currentSong) => ({
  type: RECEIVE_CURRENT_SONG,
  currentSong
});

// export const receiveNextSong = (nextSong) => ({
//   type: RECEIVE_NEXT_SONG,
//   nextSong
// });

export const playSong = () => ({
  type: PLAY_SONG
});

export const pauseSong = () => ({
  type: PAUSE_SONG
});
