import { combineReducers } from 'redux';
import addChat from './content';
import deleteChat from './content';
import loginSumbit from './loginSumbit';

const rootReducer = combineReducers({
  addChat,
  deleteChat,
  loginSumbit,
});

export default rootReducer;
