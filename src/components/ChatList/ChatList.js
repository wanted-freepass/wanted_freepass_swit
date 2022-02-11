import React, { useState } from 'react';
import * as S from './ChatList.style';

const ChatList = ({ chat }) => {
  // console.log(chat);
  return (
    <S.Container>
      <S.ProfileImg>
        <S.Img src={chat.profileImage} />
      </S.ProfileImg>
      <S.ProfileInfo>
        <S.UserIdWrap>
          <S.UserId>{chat.userName}</S.UserId>
          <S.Date>{chat.date}</S.Date>
        </S.UserIdWrap>
        <S.Message>{chat.content}</S.Message>
      </S.ProfileInfo>
    </S.Container>
  );
};

export default ChatList;
