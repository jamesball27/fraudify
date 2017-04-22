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
