import React, { useState } from 'react';
import * as S from './Textarea.style';
import { useKeyPress } from '../../../hooks/useKeyPress';

const Textarea = e => {
  const [text, onChange, onKeyPress, onSubmit] = useKeyPress();
  const [commentList, setCommentList] = useState([]);

  return (
    <S.Container>
      <S.Textarea
        value={text}
        onChange={onChange}
        onKeyUp={onKeyPress}
        placeholder="Text your message"
      />
      {text.length > 0 ? (
        <S.Submit type="button" onClick={onSubmit} checkBtn={true}>
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
