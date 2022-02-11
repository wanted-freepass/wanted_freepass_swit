import { useState } from 'react';

export const useKeyPress = () => {
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = () => {
    if (text.trim().length === 0) {
      return;
    }
    setText('');
    console.log(text);
  };

  const onKeyPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      onSubmit();
      setText('');
      if (!!e.shiftKey) {
        setText(text.replaceAll(/(\n|\r\n)/g, '\n'));
      }
    }
  };

  return [text, onChange, onKeyPress, onSubmit];
};
