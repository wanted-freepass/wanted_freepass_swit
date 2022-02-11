import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  background-color: rgb(200, 200, 210);
  display: flex;
  align-items: flex-start;
`;

export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(200, 0, 210);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
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

export const UserId = styled.p`
  font-size: ${({ theme }) => theme.fontMedium};
  font-weight: ${({ theme }) => theme.weightBold};
  padding: 5px 15px 15px;
`;

export const Message = styled.p`
  font-size: ${({ theme }) => theme.fontRegular};
  padding: 0 15px 15px;
`;
