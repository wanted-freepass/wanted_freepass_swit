import React, { useState } from 'react';
import * as S from './Textarea.style';
import { useKeyPress } from '../../../hooks/useKeyPress';

const Textarea = () => {
  const [text, onChange, onKeyPress, onSubmit] = useKeyPress();
  const [commentList, setCommentList] = useState([]);

  return (
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
  );
};

export default Textarea;
