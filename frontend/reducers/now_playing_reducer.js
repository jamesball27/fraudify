import { RECEIVE_CURRENT_SONG, PLAY_SONG, PAUSE_SONG } from '../actions/now_playing_actions';

const defaultState = {
  currentSong: null,
  playing: false
};

const NowPlayingReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      const currentSong = action.currentSong;
      return Object.assign({}, state, { currentSong });
    case PLAY_SONG:
      return Object.assign({}, state, { playing: true });
    case PAUSE_SONG:
      return Object.assign({}, state, { playing: false });
    default:
      return state;
  }
};

export default NowPlayingReducer;
