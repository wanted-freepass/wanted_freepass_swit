import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  align-items: flex-start;
  transition: all 0.5s ease-out;
  position: absolute;
  bottom: ${({ bottomPx }) => bottomPx}px;

  &:hover {
    background-color: rgba(140, 140, 140, 0.1);
  }
`;

export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ RandomColor }) => RandomColor};
  border-radius: 50%;
  text-align: center;
  line-height: 1.7;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const FirstName = styled.h3`
  font-size: 27px;
  font-weight: ${({ theme }) => theme.weightBold};
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  top: 0;
  left: 0;
`;

export const UserIdWrap = styled.div`
  display: flex;
`;

export const UserId = styled.span`
  font-size: ${({ theme }) => theme.fontMedium};
  font-weight: ${({ theme }) => theme.weightBold};
  padding: 5px 15px 15px;
  display: flex;
`;

export const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSmall};
  font-style: italic;
  color: ${({ theme }) => theme.gray};
  padding: 5px 5px 15px;
  line-height: 1.6;
`;
