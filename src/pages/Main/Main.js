import React from 'react';
import * as S from './Main.style';
import ProfileModal from '../../components/ProfileModal';
import Channels from './Channels';
import Textarea from './Textarea';

const Main = () => {
  return (
    <S.Container>
      <ProfileModal />
      <Channels />
      <S.Wrapper>
        <Textarea />
      </S.Wrapper>
    </S.Container>
  );
};

export default Main;
