import React from 'react';

const ArtistDetail = props => {
  return(
    <div className="artist-detail">
      <img src={ props.artist.image_url } className="image-round"/>
      <h1>{ props.artist.name }</h1>
    </div>
  );
};

export default ArtistDetail;
