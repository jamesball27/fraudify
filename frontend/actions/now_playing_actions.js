export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';

export const receiveCurrentSong = (song) => ({
  type: RECEIVE_CURRENT_SONG,
  currentSong: song
});

export const receiveNextSong = (song) => ({
  type: RECEIVE_NEXT_SONG,
  song
})
