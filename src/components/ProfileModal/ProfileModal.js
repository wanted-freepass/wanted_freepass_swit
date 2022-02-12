import React from 'react';
import { useDispatch } from 'react-redux';
import { loginSubmit } from '../../store/actions/loginSubmit';
import * as S from './ProfileModal.style';
import { useImageUpload } from '../../hooks/useImageUpload';
import { useInputTextValue } from '../../hooks/useInputTextValue';

const ProfileModal = ({ checked, isModalChecked, isLogged }) => {
  const dispatch = useDispatch();
  const [file, imageUpload] = useImageUpload();
  const [inputText, userInfoSettings] = useInputTextValue();

  const onSubmitInfo = () => {
    !!inputText
      ? dispatch(loginSubmit(inputText, file, checked))
      : alert('사용자의 이름과 이미지를 업로드 해주세요');
  };

  return (
    <S.Container>
      <S.CloseButtonWrap>
        <S.Button closed onClick={onSubmitInfo}>
          <S.CloseIcon />
        </S.Button>
      </S.CloseButtonWrap>
      <S.InputWrap>
        <S.InputImageLabel>
          {file ? <S.Image src={file} /> : <S.Profile />}
          <S.InputImage onChange={imageUpload} />
        </S.InputImageLabel>
        <S.Input defaultValue={inputText} onChange={userInfoSettings} />
      </S.InputWrap>
      <S.ButtonWrap>
        <S.Button onClick={onSubmitInfo}>제출</S.Button>
      </S.ButtonWrap>
    </S.Container>
  );
};

export default ProfileModal;
