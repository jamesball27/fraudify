export const arrayAllPlaylists = (state) => (
  Object.keys(state.playlists).map(key => state.playlists[key])
);

export const arrayAllSongs = (state) => (
  Object.keys(state.songs).map(key => state.songs[key])
);

export const arrayAllAlbums = (state) => (
  Object.keys(state.albums).map(key => state.albums[key])
);

export const arrayAllArtists = (state) => (
  Object.keys(state.artists).map(key => state.artists[key])
);

export const songsByArtist = ({ songs, artists }, artistId) => {
  let artistSongs = [];
  for (const songId in songs) {
    if (songs[songId].artist === artists[artistId].name) {
      artistSongs.push(songId);
    }
  }
  return artistSongs;
};

export const albumsByArtist = ({ albums, artists }, artistId) => {
  let artistAlbums = [];
  for (const albumId in albums) {
    if (albums[albumId].artist === artists[artistId].name) {
      artistAlbums.push(albumId);
    }
  }
  return artistAlbums;
};

export const playlistsByCurrentUser = ({ playlists }, username) => {
  let userPlaylists = [];
  for (const playlistId in playlists) {
    if (playlists[playlistId].creator === username) {
      userPlaylists.push(playlists[playlistId]);
    }
  }
  return userPlaylists;
};
