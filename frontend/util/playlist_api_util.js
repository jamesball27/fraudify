export const fetchPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/playlists'
  })
);

export const createPlaylist = (playlistName) => (
  $.ajax({
    method: 'POST',
    url: '/api/playlists',
    data: { playlist: { name: playlistName} }
  })
);
