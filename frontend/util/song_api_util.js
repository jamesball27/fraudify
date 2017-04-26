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

export const fetchAlbumSongs = (albumId) => (
  $.ajax({
    method: 'GET',
    url: `/api/albums/${albumId}/songs`
  })
);

export const fetchPlaylistSongs = (playlistId) => (
  $.ajax({
    method: 'GET',
    url: `/api/playlists/${playlistId}/songs`
  })
);
