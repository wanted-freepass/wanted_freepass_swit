import React, { useState } from 'react';
import * as S from './ProfileModal.style';

const ProfileModal = () => {
  const [isUser, setIsUser] = useState(false);

  const handledClosed = () => {
    setIsUser(prev => !prev);
  };
  return (
    !isUser && (
      <S.Container>
        <S.Button closed onClick={handledClosed}>
          <S.CloseIcon />
        </S.Button>
        <S.Input type="text" placeholder="이름을 입력하세요" />
        <S.Input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          placeholder="이름을 입력하세요"
        />
        <S.Button>확인했습니다</S.Button>
      </S.Container>
    )
  );
};

export default ProfileModal;
