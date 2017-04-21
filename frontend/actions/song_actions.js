import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';

const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const fetchAllSongs = () => dispatch => {
  return SongApiUtil.fetchAllSongs()
    .then(songs => dispatch(receiveSongs(songs)));
};
