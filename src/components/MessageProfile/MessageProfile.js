import React, { useState } from 'react';
import * as S from './MessageProfile.style';

const MessageProfile = () => {
  const [isUser, setIsUser] = useState(false);

  return (
    <S.Container>
      <S.ProfileImg>
        <S.Img src="img/profile.png" />
      </S.ProfileImg>
      <S.ProfileInfo>
        <S.UserId>홍유진</S.UserId>
        <S.Message>안녕!</S.Message>
        <S.Message>안녕!</S.Message>
        <S.Message>안녕!</S.Message>
        <S.Message>안녕!</S.Message>
        <S.Message>안녕!</S.Message>
        <S.Message>안녕!</S.Message>
        <S.Message>안녕!</S.Message>
        <S.Message>안녕!</S.Message>
      </S.ProfileInfo>
    </S.Container>
  );
};

export default MessageProfile;
