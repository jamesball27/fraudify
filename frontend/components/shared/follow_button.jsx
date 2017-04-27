import React from 'react';
import { connect } from 'react-redux';
import { toggleFollow } from '../../util/follow_api_util';
import { withRouter } from 'react-router';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { followText: 'Follow' };
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  toggleFollow(e) {
    e.preventDefault();

    let followableId;
    if (this.props.followableType === 'Playlist') {
      followableId = this.props.params.playlistId;
    } else {
      followableId = this.props.params.artistId;
    }

    const follow = {
      followable_id: followableId,
      followable_type: this.props.followableType
    };

    debugger
    if (this.state.followText === 'Follow') {
      debugger
      this.props.createFollow(follow)
        .then(this.setState({ followText: 'Unfollow' }));
    } else {
      this.props.deleteFollow(follow);
      this.setState({ followText: 'Follow'});
    }
  }

  render() {
    return(
      <button onClick={ this.toggleFollow }>{ this.state.followText }</button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow))
});

export default connect(null, mapDispatchToProps)(withRouter(FollowButton));
