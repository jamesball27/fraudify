import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
const FETCHING = 'FETCHING';

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const fetchAlbums = () => dispatch => {
  dispatch({ type: FETCHING });
  return AlbumApiUtil.fetchAlbums()
    .then(albums => dispatch(receiveAlbums(albums)));
};

export const fetchAlbum = (albumId) => dispatch => {
  dispatch({ type: FETCHING });
  return AlbumApiUtil.fetchAlbum(albumId)
    .then(album => dispatch(receiveAlbum(album)));
};

export const fetchArtistAlbums = artistId => dispatch => {
  dispatch({ type: FETCHING });
  return AlbumApiUtil.fetchArtistAlbums(artistId)
    .then(albums => dispatch(receiveAlbums(albums)));
};
