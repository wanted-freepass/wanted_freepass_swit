import { combineReducers } from 'redux';
import modals from './modals';
import addChat from './content';
import deleteChat from './content';

const rootReducer = combineReducers({
  modals,
  addChat,
  deleteChat,
});

export default rootReducer;
