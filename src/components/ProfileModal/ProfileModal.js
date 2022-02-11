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

  console.log(isLogged, 'd홍유진', file, inputText);

  const onSubmitInfo = () => {
    !!inputText
      ? dispatch(loginSubmit(inputText, file, checked))
      : alert('사용자의 이름과 이미지를 업로드 해주세요');
  };

  return (
    <S.Container>
      <S.Button closed onClick={onSubmitInfo}>
        <S.CloseIcon />
      </S.Button>
      <S.InputWrap>
        <S.InputImageLabel>
          {file ? <S.Image src={file} /> : <S.Profile />}
          <S.InputImage onChange={imageUpload} />
        </S.InputImageLabel>
        <S.Input defaultValue={inputText} onChange={userInfoSettings} />
      </S.InputWrap>
      <S.Button onClick={onSubmitInfo}>제출</S.Button>
    </S.Container>
  );
};

export default ProfileModal;
