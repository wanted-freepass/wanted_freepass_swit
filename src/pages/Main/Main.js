import React, { useState } from 'react';
import * as S from './Main.style';
import Modal from '../../components/Modal';

const Main = () => {
  const [text, setText] = useState('');
  const [commentList, setCommentList] = useState([]);
  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    console.log(text);
  };

  const onKeyPress = e => {
    if (e.length === 0) {
      return;
    }
    if (e.key === 'Enter') {
      onSubmit();
      setText('');
    }
  };

  return (
    <S.Container>
      <form>
        <S.Textarea value={text} onChange={onChange} onKeyUp={onKeyPress} />
        {text.length > 0 ? (
          <S.SubmitChecked type="button" onClick={onSubmit}>
            <S.SubmitIcon />
          </S.SubmitChecked>
        ) : (
          <S.Submit type="button" disabled="true">
            <S.SubmitIcon />
          </S.Submit>
        )}
      </form>
      <Modal />
    </S.Container>
  );
};

export default Main;
