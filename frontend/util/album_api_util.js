export const fetchAlbums = () => (
  $.ajax({
    method: 'GET',
    url: '/api/albums'
  })
);

export const fetchArtistAlbums = (artistId) => (
  $.ajax({
    method: 'GET',
    url: `/api/artists/${artistId}/albums`
  })
);
