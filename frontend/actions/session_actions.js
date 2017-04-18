import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const logIn = user => dispatch => {
  return SessionApiUtil.logIn(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors))
    );
};

export const signUp = user => dispatch => {
  return SessionApiUtil.signUp(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors))
    );
};

export const logOut = () => dispatch => {
  return SessionApiUtil.logOut()
    .then(
      () => dispatch(receiveCurrentUser(null))
    );
};
