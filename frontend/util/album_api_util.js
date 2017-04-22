export const fetchAlbums = () => (
  $.ajax({
    method: 'GET',
    url: '/api/albums'
  })
);
