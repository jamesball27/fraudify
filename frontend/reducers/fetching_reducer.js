import { RECEIVE_SONGS } from '../actions/song_actions';
import { RECEIVE_PLAYLISTS } from '../actions/playlist_actions';
import { RECEIVE_ALBUMS } from '../actions/album_actions';
import { RECEIVE_ARTISTS } from '../actions/artist_actions';

const FETCHING = 'FETCHING';

const FetchingReducer = (state = false, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SONGS:
      return false;
    case RECEIVE_PLAYLISTS:
      return false;
    // case RECEIVE_PLAYLIST:
    case RECEIVE_ALBUMS:
      return false;
    // case RECEIVE_ALBUM:
    case RECEIVE_ARTISTS:
      return false;
    // case RECEIVE_ARTIST:
    case FETCHING:
      return true;
    default:
      return state;
  }
};

export default FetchingReducer;
