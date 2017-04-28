import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST,
  RECEIVE_USER_PLAYLISTS
} from '../actions/playlist_actions';

import { RECEIVE_PLAYLIST_SONG, REMOVE_PLAYLIST_SONG } from '../actions/playlist_song_actions';

const PlaylistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let playlist;

  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.playlists);
    case RECEIVE_USER_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, { [action.playlist.id]: action.playlist });
    case REMOVE_PLAYLIST:
      const newState = Object.assign({}, state);
      delete newState[action.playlistId];
      return newState;
    case RECEIVE_PLAYLIST_SONG:
      playlist = state[action.playlistSong.playlistId];
      playlist.songs.push(action.playlistSong.songId);
      return Object.assign({}, state, { [playlist.id]: playlist });
    case REMOVE_PLAYLIST_SONG:
      playlist = state[action.playlistSong.playlistId];
      const index = playlist.songs.indexOf(action.playlistSong.songId);
      playlist.songs.splice(index, 1);
      return Object.assign({}, state, { [playlist.id]: playlist });
    default:
      return state;
  }
};

export default PlaylistsReducer;
