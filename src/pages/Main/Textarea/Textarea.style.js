import styled from 'styled-components';
import { RiSendPlane2Fill } from 'react-icons/ri';

export const Container = styled.form`
  width: 80%;
  z-index: 9;
  position: fixed;
  bottom: 30px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px 80px 10px 10px;
  border: ${props => props.theme.borderGray};
  resize: none;
  white-space: pre-wrap;
  font-family: 'Noto-sans';
  font-size: ${({ theme }) => theme.fontMedium};
  position: relative;
  background-color: ${({ theme }) => theme.white};
`;

export const Submit = styled.button`
  width: 45px;
  height: 44px;
  border-radius: ${({ theme }) => theme.buttonRadius};
  background-color: ${({ theme, checkBtn }) =>
    checkBtn ? theme.mainPink : theme.buttonBackground};
  position: absolute;
  right: 12px;
  bottom: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

export const SubmitIcon = styled(RiSendPlane2Fill)`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontLarge};
`;
