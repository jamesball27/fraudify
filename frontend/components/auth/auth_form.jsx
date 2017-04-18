import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';
import { logIn, signUp } from '../../actions/session_actions';
import { Link } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '', password: '' };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitAction(this.state);
    this.props.router.push('/mymusic/playlists');
  }

  render() {
    let formText, buttonText, linkText, linkUrl;
    if (this.props.formType === 'login') {
      formText = 'Log In';
      buttonText = 'LOG IN';
      linkText = 'Don\'t have an account? Sign up here.';
      linkUrl = '/signup';
    } else {
      formText = 'Create a free Fraudify account';
      buttonText = 'SIGN UP';
      linkText = '<< Go back';
      linkUrl = '/';
    }

    return(
      <main className="home">
        <section className="auth-form">
          <h2>{ formText }</h2>
          <form onSubmit={ this.handleSubmit }>
            <input
              type="text"
              placeholder="Username"
              value={ this.state.username }
              onChange={ this.handleInput('username') }
            />
            <input
              type="password"
              placeholder="Password"
              value={ this.state.password }
              onChange={ this.handleInput('password') }
            />
            <input type="submit" value={ buttonText } />
          </form>
          <Link to={ linkUrl }>{ linkText }</Link>
        </section>
        <Splash />
      </main>
    );
  }
}

const mapStateToProps = ({ session }, ownProps) => {
  return { formType: ownProps.route.path };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let submitAction;
  const currentPath = ownProps.route.path;
  if (currentPath === 'login') {
    submitAction = (user) => dispatch(logIn(user));
  } else if (currentPath === 'signup') {
    submitAction = (user) => dispatch(signUp(user));
  }

  return { submitAction };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
