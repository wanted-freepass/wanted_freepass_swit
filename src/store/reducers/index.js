import { combineReducers } from 'redux';
import modals from './modals';
import addChat from './content';
import deleteChat from './content';
import loginSumbit from './loginSumbit';

const rootReducer = combineReducers({
  modals,
  addChat,
  deleteChat,
  loginSumbit,
});

export default rootReducer;
