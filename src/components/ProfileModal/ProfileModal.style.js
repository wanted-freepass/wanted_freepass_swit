import styled from 'styled-components';
import { RiCloseFill } from 'react-icons/ri';

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

export const Button = styled.button`
  padding: ${({ closed }) => (closed ? '5px' : '10px 30px')};
  background-color: ${({ theme, closed }) =>
    closed ? 'tranparent' : theme.mainPink};
  border-radius: ${({ theme }) => theme.buttonRadius};
  color: ${({ theme, closed }) => (closed ? theme.black : theme.white)};
`;

export const Input = styled.input`
  width: 70%;
  height: 36px;
  padding: 10px;
  border: ${props => props.theme.borderGray};

  &:focus {
    border: 1px solid ${props => props.theme.black};
  }
`;

export const CloseIcon = styled(RiCloseFill)`
  color: ${({ theme }) => theme.borderGray};
  font-size: ${({ theme }) => theme.fontLarge};
`;
