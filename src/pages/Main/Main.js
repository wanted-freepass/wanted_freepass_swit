import React, { useState } from 'react';
import * as S from './Main.style';
import Modal from '../../components/Modal';

const Main = () => {
  const [text, setText] = useState('');
  const [commentList, setCommentList] = useState([]);
  const onChange = e => {
    setText(e.target.value);
  };

  console.log(text);
  const onClick = e => {
    console.log(text);
  };

  const onKeyPress = e => {
    if (e.key == 'Enter') {
      onClick();
    }
  };
  return (
    <S.Container>
      <form>
        <textarea value={text} onChange={onChange} onKeyPress={onKeyPress} />

        <button type="button" onClick={onClick}>
          전송
        </button>
      </form>
      <Modal />
    </S.Container>
  );
};

export default Main;
