import React from 'react';
import * as S from './Message.style';
import { useSelector } from 'react-redux';
import Delete from '../Delete';
import { useModalChecked } from '../../../hooks/useModalChecked';

function Message({ inputData, ref }) {
  const [checked, isModalChecked] = useModalChecked();

  console.log(ref);
  return (
    <S.Content ref={ref}>
      {inputData.map((el, index) => (
        <S.ChatDataContent key={index}>
          <S.ChatData>{el}</S.ChatData>
          {checked && <Delete />}
          <S.DataWrap>
            <S.Reply />
            <S.DelButton onClick={isModalChecked} />
          </S.DataWrap>
        </S.ChatDataContent>
      ))}
    </S.Content>
  );
}

export default Message;
