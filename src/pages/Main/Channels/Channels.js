import React from 'react';
import * as S from './Channels.style';

const Channels = () => {
  return (
    <S.Container>
      <S.Logo src="/img/logo.png" />
      <S.MenuTabWrap>
        <S.MenuTitle>Browse Channels</S.MenuTitle>
        <S.Menu>Channels</S.Menu>
      </S.MenuTabWrap>
    </S.Container>
  );
};

export default Channels;
