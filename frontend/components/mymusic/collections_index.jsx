import React from 'react';
import { connect } from 'react-redux';
import { arrayAllPlaylists } from '../../reducers/selectors';
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
      <section className="collections-index">
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
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const indexType = ownProps.route.path;

  return {
    playlists: arrayAllPlaylists(state),
    indexType
  };
};

export default connect(mapStateToProps)(CollectionsIndex);
