import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSubmit } from '../../store/actions/loginSubmit';
import * as S from './ProfileModal.style';
import { useImageUpload } from '../../hooks/useImageUpload';
import { useInputTextValue } from '../../hooks/useInputTextValue';
import { useModalChecked } from '../../hooks/useModalChecked';

const ProfileModal = () => {
  const dispatch = useDispatch();
  const [file, imageUpload] = useImageUpload();
  const [inputText, userInfoSettings] = useInputTextValue();
  const [checked, isModalChecked] = useModalChecked();
  const login = useSelector(state => state.loginSumbit);
  console.log(login);

  return (
    !checked &&
    !login.loginSumbit && (
      <S.Container>
        <S.Button closed onClick={isModalChecked}>
          <S.CloseIcon />
        </S.Button>
        <S.InputWrap>
          <S.InputImageLabel>
            {file ? <S.Image src={file} /> : <S.Profile />}
            <S.InputImage onChange={imageUpload} />
          </S.InputImageLabel>
          <S.Input defaultValue={inputText} onChange={userInfoSettings} />
        </S.InputWrap>
        <S.Button
          onClick={() => dispatch(loginSubmit(inputText, file, checked))}
        >
          제출
        </S.Button>
      </S.Container>
    )
  );
};

export default ProfileModal;
