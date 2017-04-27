import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
const FETCHING = 'FETCHING';

const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const fetchSongs = () => dispatch => {
  dispatch({ type: FETCHING });
  return SongApiUtil.fetchSongs()
    .then(songs => {
      dispatch(receiveSongs(songs));
      return songs;
    });
};

export const fetchArtistSongs = artistId => dispatch => {
  dispatch({ type: FETCHING });
  return SongApiUtil.fetchArtistSongs(artistId)
    .then(songs => dispatch(receiveSongs(songs)));
};

export const fetchAlbumSongs = albumId => dispatch => {
  dispatch({ type: FETCHING });
  return SongApiUtil.fetchAlbumSongs(albumId)
    .then(songs => dispatch(receiveSongs(songs)));
};

export const fetchPlaylistSongs = playlistId => dispatch => {
  dispatch({ type: FETCHING });
  return SongApiUtil.fetchPlaylistSongs(playlistId)
    .then(songs => dispatch(receiveSongs(songs)));
};
