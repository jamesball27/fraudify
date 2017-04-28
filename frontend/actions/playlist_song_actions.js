import * as PlaylistSongApiUtil from '../util/playlist_song_api_util';

export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

const receivePlaylistSong = playlistSong => ({
  type: RECEIVE_PLAYLIST_SONG,
  playlistSong
});

const removePlaylistSong = playlistSong => ({
  type: REMOVE_PLAYLIST_SONG,
  playlistSong
});

export const createPlaylistSong = playlistSong => dispatch => {
  return PlaylistSongApiUtil.createPlaylistSong(playlistSong)
    .then(newPlaylistSong => dispatch(receivePlaylistSong(newPlaylistSong)));
};

export const deletePlaylistSong = playlistSong => dispatch => {
  return PlaylistSongApiUtil.deletePlaylistSong(playlistSong)
    .then(deletedPlaylistSong => dispatch(removePlaylistSong(deletedPlaylistSong)));
};
