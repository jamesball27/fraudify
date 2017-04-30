import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';

const AlbumsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      return Object.assign({}, state, { [action.album.id]: action.album });
    default:
      return state;
  }
};

export default AlbumsReducer;
