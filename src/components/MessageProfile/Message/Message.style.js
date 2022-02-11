import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const ChatDataContent = styled.div`
  ${props => props.theme.flex('center', 'space-between')}
  width: 98%;
  margin: 10px 15px 0 15px;
`;

export const DelButton = styled.button`
  background: none;
  padding: 5px 8px;
  border: 1px solid gray;
  border-radius: 4px;
  font-size: 10px;
`;
