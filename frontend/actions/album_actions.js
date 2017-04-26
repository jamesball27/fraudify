import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const fetchAlbums = () => dispatch => {
  return AlbumApiUtil.fetchAlbums()
    .then(albums => dispatch(receiveAlbums(albums)));
};

export const fetchAlbum = (albumId) => dispatch => {
  return AlbumApiUtil.fetchAlbum(albumId)
    .then(album => dispatch(receiveAlbum(album)));
};

export const fetchArtistAlbums = artistId => dispatch => {
  return AlbumApiUtil.fetchArtistAlbums(artistId)
    .then(albums => dispatch(receiveAlbums(albums)));
};
