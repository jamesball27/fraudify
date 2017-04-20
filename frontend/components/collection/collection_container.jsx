import React from 'react';
import { connect } from 'react-redux';
import CollectionDetail from './collection_detail';

const CollectionContainer = (props) => {
  return(
    <main className="main-content">
      <CollectionDetail collectionItem={ props.collectionItem } />
    </main>
  );
};

const mapStateToProps = (store, ownProps) => {
  let collectionType, collectionItem;
  if (ownProps.route.path.startsWith('playlists')) {
    collectionType = 'playlist';
    collectionItem = store.playlists[ownProps.params.id];
  } else {
    collectionType = 'album';
    collectionItem = store.albums[ownProps.params.id];
  }

  return { collectionType, collectionItem };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionContainer);
