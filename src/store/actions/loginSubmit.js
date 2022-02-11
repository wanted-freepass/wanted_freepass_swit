import { LOGIN_SUBMIT } from './types';

export const loginSubmit = (inputText, file, isUser) => {
  return {
    type: LOGIN_SUBMIT,
    inputText,
    file,
  };
};
