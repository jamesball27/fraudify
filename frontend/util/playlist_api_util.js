export const fetchPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/playlists'
  })
);
