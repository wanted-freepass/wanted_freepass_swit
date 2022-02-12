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

export const Logo = styled.img`
  width: 88px;
  margin-bottom: 20px;
`;

export const MenuTabWrap = styled.div``;

export const MenuTitle = styled.div`
  margin: 20px 10px 12px;
  cursor: pointer;
`;

export const Menu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  padding: 0 8px;
  margin-bottom: 2px;
  background: ${props => props.theme.buttonBackground};
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
`;
