import { ADD_TO_TOP_OF_QUEUE } from '../actions/play_queue_actions';

const PlayQueueReducer = (state = [], action) =>{
  Object.freeze(state);

  switch(action.type) {
    case ADD_TO_TOP_OF_QUEUE:
      const newState = Object.assign([], state);
      newState.unshift(action.song);
      return newState;
    default:
      return state;
  }
};

export default PlayQueueReducer;
