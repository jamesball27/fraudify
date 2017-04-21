import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { logOut } from '../../actions/session_actions';

const Sidebar = ({ currentUser, logOut, router }) => {
  const username = currentUser ? currentUser.username : '';

  const isActive = (routeName) => {
    return router.isActive(routeName) ? 'active' : '';
  };

  const logOutRedirect = () => {
    logOut().then(() => router.push('/home'));
  };

  return(
    <nav className="sidebar">
      <div className="sidebar-top">
        <Link to="/mymusic"><img src={ window.images.logo } /></Link>
        <Link to="/search" className={ isActive('search') }>Search</Link>
        <Link to="/mymusic" className={ isActive('mymusic') }>Your Music</Link>
      </div>
      <div className="sidebar-bottom">
        <h4>{ username }</h4>
        <button onClick={ logOutRedirect } className="button green">Log Out</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Sidebar));
