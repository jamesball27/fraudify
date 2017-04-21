export const getAllPlaylists = ({ playlists }) => (
  Object.keys(playlists).map(key => playlists[key])
);
