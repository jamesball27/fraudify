export const toggleFollow = (follow, method) => {
  let apiPathName;
  if (follow.followable_type === 'Playlist') {
    apiPathName = 'playlists';
  } else {
    apiPathName = 'artists';
  }

  return $.ajax({
    method,
    url: `/api/${apiPathName}/${follow.followable_id}/follow`,
    data: { follow }
  });
};

export const fetchFollows = () => (
  $.ajax({
    method: 'GET',
    url: '/api/follows'
  })
);
