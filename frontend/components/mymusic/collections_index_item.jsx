import React from 'react';

const CollectionsIndexItem = ({ playlist }) => {
  return(
    <li key={ playlist.id }>
      { playlist.name }
    </li>
  );
};

export default CollectionsIndexItem;
