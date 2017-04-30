import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './shared/sidebar';
import NowPlaying from './now_playing/now_playing';

class App extends React.Component {

  render() {
    return(
      <div className="app">
        <section className="app-top">
          <Sidebar />
          { this.props.children }
        </section>
        <NowPlaying />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(App);
