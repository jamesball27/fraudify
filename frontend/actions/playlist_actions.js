import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

const removePlaylist = playlistId => ({
  type: REMOVE_PLAYLIST,
  playlistId
});

export const fetchPlaylists = () => dispatch => {
  return PlaylistApiUtil.fetchPlaylists()
    .then(playlists => dispatch(receivePlaylists(playlists)));
};

export const createPlaylist = playlist => dispatch => {
  return PlaylistApiUtil.createPlaylist(playlist)
    .then(newPlaylist => {
      dispatch(receivePlaylist(newPlaylist));
      return newPlaylist;
    });
};

export const updatePlaylist = playlist => dispatch => {
  debugger
  return PlaylistApiUtil.updatePlaylist(playlist)
    .then(updatedPlaylist => {
      dispatch(receivePlaylist(updatedPlaylist));
      return updatedPlaylist;
    });
};

export const deletePlaylist = playlistId => dispatch => {
  return PlaylistApiUtil.deletePlaylist(playlistId)
    .then(deletedPlaylist => dispatch(removePlaylist(deletedPlaylist.id)));
};
