import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const FETCHING_SONGS = 'FETCHING_SONGS';

const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const fetchSongs = () => dispatch => {
  dispatch({ type: FETCHING_SONGS });
  return SongApiUtil.fetchSongs()
    .then(songs => {
      dispatch(receiveSongs(songs));
      return songs;
    });
};

export const fetchArtistSongs = artistId => dispatch => {
  return SongApiUtil.fetchArtistSongs(artistId)
    .then(songs => dispatch(receiveSongs(songs)));
};
