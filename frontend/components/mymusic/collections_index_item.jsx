import React from 'react';

const CollectionsIndexItem = ({ playlist }) => {
  return(
    <li>
      { playlist.name }
    </li>
  );
};

export default CollectionsIndexItem;
