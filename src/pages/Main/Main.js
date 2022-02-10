import React from 'react';
import * as S from './Main.style';
import Modal from '../../components/Modal';
import Textarea from './Textarea';

const Main = () => {
  return (
    <S.Container>
      <Textarea />
      <Modal />
    </S.Container>
  );
};

export default Main;
