export const ADD_TO_TOP_OF_QUEUE = 'ADD_TO_TOP_OF_QUEUE';

export const addSongToTopOfQueue = (song) => ({
  type: ADD_TO_TOP_OF_QUEUE,
  song
});
