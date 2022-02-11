import { useState } from 'react';

export const useInputTextValue = () => {
  const [inputText, setInputText] = useState();

  const userInfoSettings = e => {
    const { value } = e.target;
    setInputText(value);
  };

  return [inputText, userInfoSettings];
};
