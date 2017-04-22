export const fetchSongs = () => (
  $.ajax({
    method: 'GET',
    url: '/api/songs'
  })
);

export const fetchArtistSongs = (artistId) => (
  $.ajax({
    method: 'GET',
    url: `/api/artists/${artistId}/songs`
  })
);
