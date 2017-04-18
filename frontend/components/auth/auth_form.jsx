import React from 'react';
import { connect } from 'react-redux';
import StaticPage from '../static_page';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="auth-form">
        <form>
          
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
