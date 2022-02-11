import React from 'react';
import * as S from './Main.style';
import ProfileModal from '../../components/ProfileModal';
import Channels from './Channels';
import Textarea from './Textarea';
import MessageProfile from '../../components/MessageProfile';

const Main = () => {
  return (
    <S.Container>
      <ProfileModal />
      <Channels />
      <S.Wrapper>
        <Textarea />
        <S.MessageContainer>
          <MessageProfile />
          <MessageProfile />
          <MessageProfile />
          <MessageProfile />
          <MessageProfile />
          <MessageProfile />
        </S.MessageContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Main;
