import styled from 'styled-components';
import { RiCloseFill } from 'react-icons/ri';

export const Content = styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.fontRegular};
  padding: 0 15px 15px;
`;

export const ChatDataContent = styled.div`
  ${props => props.theme.flex('center', 'space-between')};
  margin: 10px 15px 0 15px;
`;

export const ChatData = styled.p`
  line-height: 2;
  margin-right: 15px;
`;

export const DelButton = styled(RiCloseFill)`
  font-size: 20px;
  color: ${props => props.theme.darkGray};
  background: none;
  border: 1px solid gray;
  border-radius: 4px;
`;
