import styled from 'styled-components';
import { RiSendPlane2Fill } from 'react-icons/ri';

export const Container = styled.div`
  width: 100%;
`;

export const Textarea = styled.textarea`
  border: ${props => props.theme.borderGray};
  resize: none;
`;

export const Submit = styled.button`
  width: 36px;
  height: 36px;
  border-radius: ${props => props.theme.buttonRadius};
  background-color: ${props => props.theme.buttonBackground};
`;

export const SubmitChecked = styled(Submit)`
  background-color: ${props => props.theme.mainPink};
`;

export const SubmitIcon = styled(RiSendPlane2Fill)`
  color: ${props => props.theme.white};
`;
