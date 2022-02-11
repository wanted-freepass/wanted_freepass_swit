import { ADD_CHAT, DELETE_CHAT } from '../actions/types';

const INITIAL_STATE = [];

export default function content(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CHAT:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_CHAT:
      return state.filter(chat => chat.id !== action.id);
    default:
      return state;
  }
}
