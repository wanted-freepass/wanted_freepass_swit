import { createStore } from 'redux';
import rootReducer from './reducers';
import { addChat, deleteChat } from './actions/content';

const store = createStore(rootReducer);

export const actionCreators = {
  addChat,
  deleteChat,
};

export default store;
