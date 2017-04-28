import React from 'react';
import FollowButton from '../shared/follow_button';

const ArtistDetail = props => {

  if (props.artist) {
    return(
      <div className="artist-detail">
        <img src={ props.artist.imageUrl } className="image-round"/>
        <h1>{ props.artist.name }</h1>
        <FollowButton followableType="Artist" />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ArtistDetail;
