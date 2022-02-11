import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSubmit } from '../../store/actions/loginSubmit';
import * as S from './ProfileModal.style';

const ProfileModal = () => {
  const dispatch = useDispatch();
  const [isUser, setIsUser] = useState(false);
  const [nameValue, setNameValue] = useState('');

  // const modal = useSelector(state => state.modals);
  // const toast = useSelector(state => state.toast);

  const handledClosed = () => {
    setIsUser(prev => !prev);
  };

  console.log(nameValue);

  return (
    !isUser && (
      <S.Container>
        {/* <button onClick={() => dispatch(closeModal())}>닫기</button> */}
        <S.Button closed onClick={handledClosed}>
          <S.CloseIcon />
        </S.Button>
        <S.Input
          type="text"
          placeholder="이름을 입력하세요"
          defaultValue={nameValue}
          onChange={e => setNameValue(e.target.value)}
        />
        <S.Input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          placeholder="이름을 입력하세요"
        />
        <S.Button onClick={() => dispatch(loginSubmit())}>제출</S.Button>
      </S.Container>
    )
  );
};

export default ProfileModal;
