export const createPlaylistSong = (playlist_song) => (
  $.ajax({
    method: 'POST',
    url: '/api/playlist_songs',
    data: { playlist_song }
  })
);
