import { RECEIVE_SONGS, RECEIVE_USER_SONGS } from '../actions/song_actions';

const SongsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SONGS:
      return Object.assign({}, state, action.songs);
    case RECEIVE_USER_SONGS:
      return action.songs;
    default:
      return state;
  }
};

export default SongsReducer;
