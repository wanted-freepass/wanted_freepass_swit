import { ADD_CHAT, DELETE_CHAT } from '../actions/types';

const INITIAL_STATE = {
  list: [],
};

export default function content(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CHAT:
      const new_content_list = [...state.list, action.text];
      return { list: new_content_list };

    case DELETE_CHAT:
      const new_bucket_list = state.list.filter((l, idx) => {
        return parseInt(action.id) !== idx;
      });
      return { list: new_bucket_list };
    default:
      return state;
  }
}
