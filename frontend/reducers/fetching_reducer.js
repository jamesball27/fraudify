import { RECEIVE_SONGS, FETCHING_SONGS } from '../actions/song_actions';

const FetchingReducer = (state = false, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SONGS:
      return false;
    case FETCHING_SONGS:
      return true;
    default:
      return state;
  }
};

export default FetchingReducer;
