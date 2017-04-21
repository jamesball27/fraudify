import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST
} from '../actions/playlist_actions';

const PlaylistsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, { [action.playlist.id]: action.playlist });
    case REMOVE_PLAYLIST:
      const newState = Object.assign({}, state);
      delete newState[action.playlistId];
      return newState;
    default:
      return state;
  }
};

export default PlaylistsReducer;
