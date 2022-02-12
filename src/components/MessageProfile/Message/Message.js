import React from 'react';
import * as S from './Message.style';
import Delete from '../Delete';
import { useModalChecked } from '../../../hooks/useModalChecked';

function Message({ inputData, ref }) {
  const [checked, isModalChecked] = useModalChecked();

  const isDeleteAlert = () => {
    isModalChecked();
  };

  console.log(inputData);

  return (
    <S.Content ref={ref}>
      {checked && <Delete />}
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
