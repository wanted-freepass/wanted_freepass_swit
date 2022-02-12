import React from 'react';
import * as S from './Delete.style';
import { useModalChecked } from '../../../hooks/useModalChecked';
import { deleteChat } from '../../../store/actions/content';

const Delete = ({ inputData, chatData }) => {
  const [checked, isModalChecked] = useModalChecked();

  return (
    <div>
      {!checked && (
        <S.ModalContainer>
          <S.ModalWrap>
            <div>
              <S.ModalTitle>Delete message</S.ModalTitle>
              <S.Subtitle>메시지를 삭제하시겠습니까?</S.Subtitle>
              <S.DeleteChatText>{chatData}</S.DeleteChatText>
            </div>
            <S.ButtonWrap>
              <S.CancelButtton onClick={isModalChecked}>Cancel</S.CancelButtton>
              <S.DeleteButtton onClick={deleteChat}>Delete</S.DeleteButtton>
            </S.ButtonWrap>
          </S.ModalWrap>
        </S.ModalContainer>
      )}
    </div>
  );
};

export default Delete;
