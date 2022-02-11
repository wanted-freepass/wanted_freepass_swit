import { ADD_CHAT, DELETE_CHAT } from './types';

export const addChat = text => {
  return {
    type: ADD_CHAT,
    text,
  };
};

export const deleteChat = id => {
  return {
    type: DELETE_CHAT,
    id: parseInt(id),
  };
};
