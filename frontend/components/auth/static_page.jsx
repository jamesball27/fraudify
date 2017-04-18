import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logIn } from '../../actions/session_actions';
// import Splash from './splash';

const StaticPage = ({ demoLogIn }) => (
  <section className="static-page">
    <Link to="/" onClick={ demoLogIn }>Demo Log In</Link>
    <Link to="/signup">Sign Up</Link>
    <Link to="/login">Already have an account? Log In here.</Link>
  </section>
);

const mapDispatchToProps = dispatch => {
  const guestUser = { username: 'guest', password: 'password' };
  return {
    demoLogIn: () => dispatch(logIn(guestUser))
  };
};

export default connect(null, mapDispatchToProps)(StaticPage);
