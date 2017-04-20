import React from 'react';
import { Link } from 'react-router';

const CollectionsIndexItem = ({ playlist }) => {
  
  return(
    <li key={ playlist.id } className="collections-index-item">
      <Link to={ `/playlists/${playlist.id}`}>
        <img src={ playlist.image_url } />
        <h3>{ playlist.name }</h3>
        <h5>By { playlist.creator }</h5>
      </Link>
    </li>
  );
};

export default CollectionsIndexItem;
