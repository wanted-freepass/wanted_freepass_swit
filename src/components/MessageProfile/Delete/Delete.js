import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './Delete.style';
import { useModalChecked } from '../../../hooks/useModalChecked';

const Delete = () => {
  const [checked, isModalChecked] = useModalChecked();
  const chatData = useSelector(state => state.deleteChat.list);

  const isRemoveChat = () => {
    chatData.filter(chat => chat !== chatData);
    console.log(chatData);
  };

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
              <S.DeleteButtton onClick={isRemoveChat}>Delete</S.DeleteButtton>
            </S.ButtonWrap>
          </S.ModalWrap>
        </S.ModalContainer>
      )}
    </div>
  );
};

export default Delete;
