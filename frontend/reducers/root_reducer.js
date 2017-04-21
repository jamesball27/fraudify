import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PlaylistsReducer from './playlists_reducer';
import SongsReducer from './songs_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistsReducer,
  songs: SongsReducer
});

export default RootReducer;
