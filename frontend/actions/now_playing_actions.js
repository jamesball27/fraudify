export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';

export const receiveCurrentSong = (currentSong) => ({
  type: RECEIVE_CURRENT_SONG,
  currentSong
});

export const playSong = () => ({
  type: PLAY_SONG
});

export const pauseSong = () => ({
  type: PAUSE_SONG
});
