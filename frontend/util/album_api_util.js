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

export const fetchAlbum = (album_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/albums/${album_id}`
  })
);
