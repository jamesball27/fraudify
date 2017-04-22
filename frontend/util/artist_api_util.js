export const fetchArtists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/artists'
  })
);
