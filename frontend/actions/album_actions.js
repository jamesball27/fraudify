import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const fetchAlbums = () => dispatch => {
  return AlbumApiUtil.fetchAlbums()
    .then(albums => dispatch(receiveAlbums(albums)));
};

export const fetchArtistAlbums = artistId => dispatch => {
  return AlbumApiUtil.fetchArtistAlbums(artistId)
    .then(albums => dispatch(receiveAlbums(albums)));
};
