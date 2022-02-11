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
        userId: console.log('moolbum'),
        userName: console.log('이용우'),
        profileImage: console.log('사진'),
      };
    default:
      return state;
  }
}
