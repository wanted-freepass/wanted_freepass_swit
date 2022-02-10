import React from 'react';
import * as S from './Main.style';
import Modal from '../../components/Modal';
import Channels from './Channels';
import Textarea from './Textarea';

const Main = () => {
  return (
    <S.Container>
      <Channels />
      <S.Wrapper>
        <Textarea />
        <Modal />
      </S.Wrapper>
    </S.Container>
  );
};

export default Main;
