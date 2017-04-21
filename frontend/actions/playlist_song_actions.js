import * as PlaylistSongApiUtil from '../util/playlist_song_api_util';

export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';

const receivePlaylistSong = playlistSong => ({
  type: RECEIVE_PLAYLIST_SONG,
  playlistSong
});

export const createPlaylistSong = playlistSong => dispatch => {
  return PlaylistSongApiUtil.createPlaylistSong(playlistSong)
    .then(newPlaylistSong => dispatch(receivePlaylistSong(playlistSong)));
};
