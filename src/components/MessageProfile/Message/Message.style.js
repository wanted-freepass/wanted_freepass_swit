import styled from 'styled-components';
import { RiCloseFill } from 'react-icons/ri';

export const Content = styled.p`
  font-size: ${({ theme }) => theme.fontRegular};
  padding: 0 15px 15px;
`;

export const ChatDataContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChatData = styled.p`
  line-height: 2;
  margin-right: 15px;
`;

export const DelButton = styled(RiCloseFill)`
  font-size: 20px;
  color: ${props => props.theme.darkGray};
  background: none;
`;
