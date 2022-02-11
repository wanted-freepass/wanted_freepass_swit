import { LOGIN_SUBMIT } from '../actions/types';

const INITIAL_STATE = {
  loginSumbit: false,
};

export default function loginSumbit(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return {
        ...state,
        loginSumbit: true,
        userId: action.userName,
        userName: action.inputText,
        profileImage: action.file,
      };
    default:
      return state;
  }
}
