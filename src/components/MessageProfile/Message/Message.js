import React from 'react';
import * as S from './Message.style';
import { useSelector } from 'react-redux';
import Delete from '../Delete';
import { useModalChecked } from '../../../hooks/useModalChecked';

function Message() {
  const [checked, isModalChecked] = useModalChecked();
  const data = useSelector(state => state.addChat.list);

  return (
    <S.Content>
      {checked && <Delete />}
      {data.map((el, index) => (
        <S.ChatDataContent key={index}>
          <p>{el}</p>
          <S.DelButton onClick={isModalChecked}>X</S.DelButton>
        </S.ChatDataContent>
      ))}
    </S.Content>
  );
}

export default Message;
