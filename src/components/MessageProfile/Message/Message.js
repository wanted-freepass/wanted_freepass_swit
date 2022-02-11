import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import * as S from './Message.style';

function Message({ text, onDelBtnClick }) {
  const data = useSelector(state => state.addChat.list);

  console.log(data);

  return (
    <S.Content>
      {data.map((el, idx) => (
        <S.ChatDataContent key={idx}>
          <S.ChatData>{el}</S.ChatData>
          <S.DelButton onClick={onDelBtnClick} />
        </S.ChatDataContent>
      ))}
    </S.Content>
  );
}

export default Message;
