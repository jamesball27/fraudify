import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollows = (follows) => ({
  type: RECEIVE_FOLLOWS,
  follows
});

const receiveFollow = (follow, followableType) => ({
  type: RECEIVE_FOLLOW,
  follow
});

const removeFollow = (follow) => ({
  type: REMOVE_FOLLOW,
  follow
});

export const fetchFollows = () => dispatch => {
  return FollowApiUtil.fetchFollows()
    .then(follows => dispatch(receiveFollows(follows)));
};

export const createFollow = (follow) => dispatch => {
  return FollowApiUtil.toggleFollow(follow, 'POST')
    .then(newFollow => dispatch(receiveFollow(newFollow)));
};

export const deleteFollow = (follow) => dispatch => {
  return FollowApiUtil.toggleFollow(follow, 'DELETE')
    .then(deletedFollow => dispatch(removeFollow(deletedFollow)));
};
