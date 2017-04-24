import { RECEIVE_CURRENT_SONG } from '../actions/now_playing_actions';

const defaultState = {
  currentSong: null,
  queue: []
};

const NowPlayingReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      const currentSong = action.currentSong;
      return Object.assign({}, state, { currentSong });
    default:
      return state;
  }
};

export default NowPlayingReducer;
