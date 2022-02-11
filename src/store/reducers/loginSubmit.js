import { LOGIN_SUBMIT } from '../actions/types';

const INITIAL_STATE = {
  loginSubmit: false,
};

export default function loginSubmit(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return {
        ...state,
        loginSubmit: true,
        userId: action.userName,
        userName: action.inputText,
        profileImage: action.file,
      };
    default:
      return state;
  }
}
