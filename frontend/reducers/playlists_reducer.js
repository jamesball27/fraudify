import { RECEIVE_PLAYLISTS } from '../actions/playlist_actions';

const PlaylistsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    default:
      return state;
  }
};

export default PlaylistsReducer;
