import styled from 'styled-components';

export const Container = styled.div`
  width: 18%;
  height: 100%;
  z-index: 9;
  border-right: ${props => props.theme.borderGray};
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px;
`;
