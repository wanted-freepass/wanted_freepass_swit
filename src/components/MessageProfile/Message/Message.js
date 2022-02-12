import React from 'react';
import * as S from './Message.style';
import { useSelector } from 'react-redux';
import Delete from '../Delete';
import { useModalChecked } from '../../../hooks/useModalChecked';

function Message({ inputData, ref }) {
  const [checked, isModalChecked] = useModalChecked();

  console.log(ref);
  return (
    <S.Content>
      {inputData.map((el, index) => (
        <S.ChatDataContent key={index}>
          <p ref={ref}>{el}</p>
          {checked && <Delete />}
          <div>
            <S.Reply />
            <S.DelButton onClick={isModalChecked} />
          </div>
        </S.ChatDataContent>
      ))}
    </S.Content>
  );
}

export default Message;
