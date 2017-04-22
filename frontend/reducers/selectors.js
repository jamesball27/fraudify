export const arrayAllPlaylists = ({ playlists }) => (
  Object.keys(playlists).map(key => playlists[key])
);

export const arrayAllSongs = ({ songs }) => (
  Object.keys(songs).map(key => songs[key])
);

export const arrayAllAlbums = ({ albums }) => (
  Object.keys(albums).map(key => albums[key])
);

export const arrayAllArtists = ({ artists }) => (
  Object.keys(artists).map(key => artists[key])
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
