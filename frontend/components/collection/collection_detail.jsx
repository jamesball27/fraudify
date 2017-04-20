import React from 'react';

const CollectionDetail = props => {
  // debugger
  return(
    <section>
      <img src={ props.collectionItem.image_url } />
      <h1>{ props.collectionItem.name }</h1>
      <h2>By: {props.collectionItem.creator }</h2>
      <h5>{ `${props.collectionItem.songs.length}` } songs</h5>
    </section>
  );
};


export default CollectionDetail;
