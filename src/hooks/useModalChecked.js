import { useState } from 'react';

export const useModalChecked = e => {
  const [checked, setChecked] = useState(false);

  const isModalChecked = () => {
    setChecked(prev => !prev);
  };

  return [checked, isModalChecked];
};
