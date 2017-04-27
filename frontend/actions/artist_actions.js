import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
const FETCHING = 'FETCHING';

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const fetchArtists = () => dispatch => {
  dispatch({ type: FETCHING });
  return ArtistApiUtil.fetchArtists()
    .then(artists => dispatch(receiveArtists(artists)));
};

export const fetchArtist = artistId => dispatch => {
  dispatch({ type: FETCHING });
  return ArtistApiUtil.fetchArtist(artistId)
    .then(artist => dispatch(receiveArtist(artist)));
};
