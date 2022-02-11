import React, { useState } from 'react';
import * as S from './Textarea.style';
import { useKeyPress } from '../../../hooks/useKeyPress';
import { useDispatch, useSelector } from 'react-redux';

const Textarea = e => {
  const [text, onChange, onKeyPress, onSubmit] = useKeyPress();
  const [commentList, setCommentList] = useState([]);
  const data = useSelector(state => state.addChat.list);
  console.log(data);
  return (
    <S.Container>
      <S.Textarea
        value={text}
        onChange={onChange}
        onKeyUp={onKeyPress}
        placeholder="Text your message"
      />
      {text.length > 0 ? (
        <S.Submit type="button" onClick={onSubmit} checkBtn>
          <S.SubmitIcon />
        </S.Submit>
      ) : (
        <S.Submit type="button" disabled>
          <S.SubmitIcon />
        </S.Submit>
      )}
    </S.Container>
  );
};

export default Textarea;
