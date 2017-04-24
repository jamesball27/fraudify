import { ADD_TO_TOP_OF_QUEUE, ADD_COLLECTION_TO_QUEUE } from '../actions/play_queue_actions';

const PlayQueueReducer = (state = [], action) =>{
  Object.freeze(state);

  switch(action.type) {
    case ADD_TO_TOP_OF_QUEUE:
      const newState = Object.assign([], state);
      newState.unshift(action.song);
      return newState;
    case ADD_COLLECTION_TO_QUEUE:
      return action.collection;
    default:
      return state;
  }
};

export default PlayQueueReducer;
