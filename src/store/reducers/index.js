import { combineReducers } from 'redux';
import modals from './modals';
import loginSumbit from './loginSumbit';

const rootReducer = combineReducers({
  modals,
  loginSumbit,
});

export default rootReducer;
