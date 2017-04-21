export const arrayAllPlaylists = ({ playlists }) => (
  Object.keys(playlists).map(key => playlists[key])
);

export const arrayAllSongs = ({ songs }) => (
  Object.keys(songs).map(key => songs[key])
);
