import { combineReducers } from 'redux';
import addChat from './content';
import deleteChat from './content';
import loginSubmit from './loginSubmit';

const rootReducer = combineReducers({
  addChat,
  deleteChat,
  loginSubmit,
});

export default rootReducer;
