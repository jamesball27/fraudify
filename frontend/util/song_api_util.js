export const fetchAllSongs = () => (
  $.ajax({
    method: 'GET',
    url: '/api/songs'
  })
);
