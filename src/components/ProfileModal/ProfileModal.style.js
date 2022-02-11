import styled from 'styled-components';
import { RiCloseFill } from 'react-icons/ri';
import { BsPersonCircle } from 'react-icons/bs';

export const Container = styled.div`
  width: 500px;
  height: 400px;
  padding: 50px;
  position: absolute;
  top: 35%;
  left: 40%;
  z-index: 99;
  border: ${props => props.theme.borderGray};
  border-radius: ${({ theme }) => theme.buttonRadius};
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 0px 20px rgba(50, 50, 50, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrap = styled.div`
  ${props => props.theme.flex('center', 'center')}

  width: 80%;
`;

export const Input = styled.input.attrs({
  name: 'userName',
  type: 'text',
  placeholder: '이름을 입력하세요',
})`
  width: 70%;
  height: 36px;
  padding: 10px;
  margin-left: 15px;
  border: ${props => props.theme.borderGray};

  &:focus {
    border: 1px solid ${props => props.theme.black};
  }
`;

export const InputImageLabel = styled.label.attrs({
  name: 'profileImage',
})``;

export const Profile = styled(BsPersonCircle)`
  font-size: 45px;
  color: ${props => props.theme.gray};
`;

export const InputImage = styled(Input).attrs({
  name: 'profileImage',
  type: 'file',
  accept: 'image/png, image/gif, image/jpeg',
  placeholder: '파일을 선택하세요',
})`
  display: none;
`;

export const Image = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 45px;
`;

export const CloseIcon = styled(RiCloseFill)`
  color: ${({ theme }) => theme.borderGray};
  font-size: ${({ theme }) => theme.fontLarge};
`;

export const Button = styled.button`
  padding: ${({ closed }) => (closed ? '5px' : '10px 30px')};
  background-color: ${({ theme, closed }) =>
    closed ? 'tranparent' : theme.mainPink};
  border-radius: ${({ theme }) => theme.buttonRadius};
  color: ${({ theme, closed }) => (closed ? theme.black : theme.white)};
`;
