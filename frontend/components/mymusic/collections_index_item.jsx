import React from 'react';
import { Link } from 'react-router';

const CollectionsIndexItem = ({ item, type }) => {
  let imageRound;
  let subheader = <h5>By { item.creator || item.artist }</h5>;
  if (type === 'artists') {
    imageRound = 'image-round';
    subheader = undefined;
  }

  return(
    <li key={ item.id } className='collections-index-item'>
      <Link to={ `/${type}/${item.id}`}>
        <img src={ item.imageUrl } className={ imageRound }/>
        <h3>{ item.name || item.title }</h3>
        { subheader }
      </Link>
    </li>
  );
};

export default CollectionsIndexItem;
