import { useState } from 'react';

export const useKeyPress = () => {
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    if (text.trim().length === 0) {
      return;
    }
    setText('');
    console.log(text);
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onSubmit();
      setText('');
    }
  };

  return [text, onChange, onKeyPress, onSubmit];
};
