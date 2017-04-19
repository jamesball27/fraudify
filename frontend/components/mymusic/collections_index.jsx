import React from 'react';
import { connect } from 'react-redux';
import { getAllPlaylists } from '../../reducers/selectors';
import CollectionsIndexItem from './collections_index_item';

class CollectionsIndex extends React.Component {

  render() {
    let indexText;
    if (this.props.indexType === 'playlists') {
      indexText = 'Playlists';
    } else {
      indexText = 'Albums';
    }

    const { playlists } = this.props;
    return(
      <div>
        <h1>{ indexText }</h1>
        <ul>
          {
            playlists.map(playlist => (
              <CollectionsIndexItem
                key={ playlist.id }
                playlist={ playlist }
              />)
            )
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const indexType = ownProps.route.path;

  return {
    playlists: getAllPlaylists(state),
    indexType
  };
};

// const mapDispatchToProps = (dispatch) => ({
//
// });

// export default CollectionsIndex;
export default connect(mapStateToProps)(CollectionsIndex);
