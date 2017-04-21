import React from 'react';
import { connect } from 'react-redux';

class NowPlaying extends React.Component {

  render() {
    return(
      <section className="now-playing">
        <p>now playing here</p>
      </section>
    );
  }
}

const mapStateToProps = store => ({
  currentUser: store.session.currentUser
});

export default connect(mapStateToProps)(NowPlaying);
