import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logOut } from '../../actions/session_actions';

const Sidebar = ({ currentUser, logOut }) => {
  const username = currentUser ? currentUser.username : '';
  return(
    <nav className="sidebar">
      <div className="sidebar-top">
        <Link to="/mymusic"><img src={ window.images.logo } /></Link>
        <Link to="/mymusic">Search</Link>
        <Link to="/mymusic">Your Music</Link>
      </div>
      <div className="sidebar-bottom">
        <h4>{ username }</h4>
        <button onClick={ logOut } className="button green">Log Out</button>
      </div>
    </nav>
  );
};

const mapStateToProps = store => ({
  currentUser: store.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
