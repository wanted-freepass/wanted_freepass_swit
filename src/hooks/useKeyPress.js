import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChat } from '../store/actions/content';
import { ADD_CHAT } from '../store/actions/types';

export const useKeyPress = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = () => {
    if (text.trim().length === 0) {
      return;
    }
    dispatch(addChat(text));
    setText('');
    console.log('hooks', text);
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
