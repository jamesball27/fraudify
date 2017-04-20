import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './shared/sidebar';
import NowPlaying from './shared/now_playing';

class App extends React.Component {

  componentDidMount() {
    if (!this.props.currentUser) {
      this.props.router.push('/home');
    }
  }

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
