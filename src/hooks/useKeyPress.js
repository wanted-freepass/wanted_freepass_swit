import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChat } from '../store/actions/content';

export const useKeyPress = () => {
  // const [text, setText] = useState('');
  const [text, setText] = useState({
    id: 1,
    text: '',
  });
  const dispatch = useDispatch();
  const onChange = e => {
    setText(e.target.value);
  };

  console.log(text.text);

  const onSubmit = () => {
    if (text.text.trim().length === 0) {
      return;
    }
    dispatch(addChat(text));
    setText('');
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
