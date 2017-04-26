import React from 'react';
import CollectionsIndex from '../mymusic/collections_index';
import SongsIndex from '../songs/songs_index';
import { withRouter } from 'react-router';

const SearchResults = props => {
  const renderResults = (indexType) => {
    if (Object.keys(props.searchResults[indexType]).length === 0) {
      return(
        <h2>No Results Found</h2>
      );
    } else if (indexType === 'songs') {
      return(
        <SongsIndex search="true" />
      );
    } else {
      return(
        <CollectionsIndex indexType={ indexType } search="true"/>
      );
    }
  };

  let indexType;
  if (props.router.location.pathname.startsWith('/')) {
    indexType = props.router.location.pathname.slice(8);
  } else {
    indexType = props.router.location.pathname.slice(7);
  }
  return renderResults(indexType);
};

export default withRouter(SearchResults);
