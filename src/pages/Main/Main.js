import React, { useState } from 'react';
import * as S from './Main.style';
import Modal from '../../components/Modal';
import newLine from '../../utils/newLine';

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
    if (e.keyCode == 13) {
      if (e.shiftKey) {
        newLine(text);
      } else {
        onClick();
      }
    }
  };

  return (
    <S.Container>
      <form>
        <S.TextArea value={text} onChange={onChange} onKeyPress={onKeyPress} />
        <S.TextDiv>{text}</S.TextDiv>
        {text.length ? (
          <button type="button" onClick={onClick}>
            전송
          </button>
        ) : (
          <button disabled="disabled">전송</button>
        )}
      </form>
      <Modal />
    </S.Container>
  );
};

export default Main;
