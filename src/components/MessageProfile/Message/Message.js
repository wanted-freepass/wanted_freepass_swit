import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './Message.style';
import Delete from '../Delete';
import { useModalChecked } from '../../../hooks/useModalChecked';

function Message({ inputData, ref }) {
  const [checked, isModalChecked] = useModalChecked();

  const isDeleteAlert = () => {
    isModalChecked();
  };

  const chatData = useSelector(state => state.deleteChat.list);
  console.log(chatData);
  const id = useSelector(state => state.deleteChat.list.idx);
  console.log(id);

  return (
    <S.Content ref={ref}>
      {checked && <Delete inputData={inputData} chatData={chatData} />}
      {inputData.map((el, index) => (
        <S.ChatDataContent key={index}>
          <p>{el}</p>
          {/* {checked && <Delete />} */}
          <div>
            <S.Reply />
            <S.DelButton onClick={isDeleteAlert} />
          </div>
        </S.ChatDataContent>
      ))}
    </S.Content>
  );
}

export default Message;
