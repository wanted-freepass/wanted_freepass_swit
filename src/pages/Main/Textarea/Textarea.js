import React, { useState } from 'react';
import * as S from './Textarea.style';
import { useKeyPress } from '../../../hooks/useKeyPress';
import { useDispatch, useSelector } from 'react-redux';

const Textarea = e => {
  const [text, onChange, onKeyPress, onSubmit] = useKeyPress();
  const [commentList, setCommentList] = useState([]);
  const data = useSelector(state => state.addChat.list);
  const login = useSelector(state => state.loginSubmit);
  return (
    <S.Container>
      <S.Textarea
        value={text}
        onChange={onChange}
        onKeyUp={onKeyPress}
        placeholder={
          !login.loginSubmit
            ? '사용자 이름과 이미지를 입력하고 채팅을 시작해주세요.'
            : 'Text your message'
        }
        disabled={!login.loginSubmit}
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
