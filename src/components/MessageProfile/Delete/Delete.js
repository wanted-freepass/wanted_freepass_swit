import React from 'react';
import * as S from './Delete.style';
import { useModalChecked } from '../../../hooks/useModalChecked';

const Delete = () => {
  const [checked, isModalChecked] = useModalChecked();
  return (
    <div>
      {!checked && (
        <S.ModalContainer>
          <S.ModalWrap>
            <S.ExitWrap />
            <div>
              <S.ModalTitle>Delete message</S.ModalTitle>
              <S.Subtitle>메시지를 삭제하시겠습니까?</S.Subtitle>
            </div>
            <S.ButtonWrap>
              <S.CancelButtton onClick={isModalChecked}>Cancel</S.CancelButtton>
              <S.DeleteButtton>Delete</S.DeleteButtton>
            </S.ButtonWrap>
          </S.ModalWrap>
        </S.ModalContainer>
      )}
    </div>
  );
};

export default Delete;
