import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PlaylistsReducer from './playlists_reducer';
import SongsReducer from './songs_reducer';
import FetchingReducer from './fetching_reducer';
import ArtistsReducer from './artists_reducer';
import AlbumsReducer from './albums_reducer';
import NowPlayingReducer from './now_playing_reducer';
import PlayQueueReducer from './play_queue_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistsReducer,
  songs: SongsReducer,
  artists: ArtistsReducer,
  albums: AlbumsReducer,
  nowPlaying: NowPlayingReducer,
  playQueue: PlayQueueReducer,
  fetching: FetchingReducer
});

export default RootReducer;
