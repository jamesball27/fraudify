import React from 'react';
import { connect } from 'react-redux';

class NowPlaying extends React.Component {

  render() {
    if (this.props.currentUser) {
      return(
        <h1>Now Playing...</h1>
      );
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = store => ({
  currentUser: store.session.currentUser
});

export default connect(mapStateToProps)(NowPlaying);
