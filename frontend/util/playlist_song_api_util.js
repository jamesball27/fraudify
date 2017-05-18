export const createPlaylistSong = (playlist_song) => (
  $.ajax({
    method: 'POST',
    url: '/api/playlist_songs',
    data: { playlist_song }
  })
);

export const deletePlaylistSong = (playlist_song) => (
  $.ajax({
    method: 'DELETE',
    url: '/api/playlist_songs',
    data: { playlist_song }
  })
);
