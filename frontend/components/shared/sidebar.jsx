import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logOut } from '../../actions/session_actions';

const Sidebar = ({ currentUser, logOut }) => {
  if (currentUser) {
    return(
      <nav className="sidebar">
        <Link to="/mymusic">Your Music</Link>
        <h4>{ currentUser.username }</h4>
        <button onClick={ logOut }>Log Out</button>
      </nav>
    );
  } else {
    return <div></div>;
  }
};

const mapStateToProps = store => ({
  currentUser: store.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
