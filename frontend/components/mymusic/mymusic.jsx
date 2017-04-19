import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';

class MyMusic extends React.Component {

  componentDidUpdate() {
    if (!this.props.currentUser) {
      this.props.router.push('/login');
    }
  }

  render() {
    return(
      <div>
        <h1>MY MUSIC</h1>
        { this.props.children }
        <button onClick={ this.props.logOut }>Log Out</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyMusic);
