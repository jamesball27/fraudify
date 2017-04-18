import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logIn } from '../../actions/session_actions';
import Splash from './splash.jsx';

const HomePage = ({ demoLogIn }) => (
  <main className="home">
    <section className="auth-links">
      <Link to="/" onClick={ demoLogIn }>Demo Log In</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Already have an account? Log In here.</Link>
    </section>
    <Splash />
  </main>
);

const mapDispatchToProps = dispatch => {
  const guestUser = { username: 'guest', password: 'password' };
  return {
    demoLogIn: () => dispatch(logIn(guestUser))
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
