import { useState } from 'react';

export const useInputChecked = () => {
  const [toggle, setToggle] = useState();

  const inputCheckedValue = e => {
    const { value, checked } = e.target;
    checked && setToggle(value);
  };
  return [toggle, inputCheckedValue];
};
