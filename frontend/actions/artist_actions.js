import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

const recieveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const fetchArtists = () => dispatch => {
  return ArtistApiUtil.fetchArtists()
    .then(artists => dispatch(recieveArtists(artists)));
};
