import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
  height: 100%;
  margin-left: 18%;
  padding: 30px;
  background-color: ${props => props.theme.chatBackground};
`;
