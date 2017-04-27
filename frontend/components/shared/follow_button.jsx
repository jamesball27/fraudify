import React from 'react';
import { connect } from 'react-redux';
import { toggleFollow } from '../../util/follow_api_util';
import { withRouter } from 'react-router';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);

    let followed = false;

    if (this.props.followableType === 'Playlist') {
      if (this.props.playlistFollows.includes(parseInt(this.props.params.playlistId))) {
        followed = true;
      }
    } else if (this.props.followableType === 'Artist') {
      if (this.props.artistFollows.includes(parseInt(this.props.params.artistId))) {
        followed = true;
      }
    }

    this.state = { followed };
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


    if (!this.state.followed) {
      this.props.createFollow(follow)
        .then(this.setState({ followed: true }));
    } else {
      this.props.deleteFollow(follow)
        .then(this.setState({ followed: false }));
    }
  }

  render() {
    let followText = 'Follow';
    if (this.state.followed) {
      followText = 'Unfollow';
    }

    return(
      <button className="button green follow" onClick={ this.toggleFollow }>{ followText }</button>
    );
  }
}

const mapStateToProps = state => ({
  playlistFollows: state.follows.playlists,
  artistFollows: state.follows.artists
});

const mapDispatchToProps = dispatch => ({
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FollowButton));
