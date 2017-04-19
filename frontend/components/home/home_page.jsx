import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logIn } from '../../actions/session_actions';
import Splash from './splash.jsx';

class HomePage extends React.Component {

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser) {
      this.props.router.push('/mymusic/playlists');
    }
  }

  render() {
    return (
      <main className="home">
        <section className="left">
          <header>
            <img src={ window.images.logo } />
            <h1>Fraudify</h1>
          </header>

          <section className="auth-links">
            <Link
              to="/mymusic/playlists"
              onClick={ this.props.demoLogIn }
              className="demo button">Demo Log In</Link>

            <Link to="/signup" className="button">Sign Up</Link>

            <Link to="/login">Already have an account? Log In here.</Link>
          </section>
        </section>
        <Splash />
      </main>
    );
  }
}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => {
  const guestUser = { username: 'guest', password: 'password' };
  return { demoLogIn: () => dispatch(logIn(guestUser)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
