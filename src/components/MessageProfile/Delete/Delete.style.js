import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: #fff;
  z-index: 999;
  box-shadow: 0px 0px 20px rgba(50, 50, 50, 0.3);
`;

export const ExitWrap = styled.div`
  position: relative;
`;

export const Exit = styled.button`
  position: absolute;
  right: 0;
  width: 25px;
  background: none;
  padding: 5px 8px;
  border: 1px solid gray;
  border-radius: 4px;
  font-size: 10px;
`;

export const ModalTitle = styled.h1`
  margin: 10px 0;
  font-size: ${props => props.theme.fontLarge};
  font-weight: ${props => props.theme.weightBold};
`;

export const Subtitle = styled.p`
  margin-bottom: 20px;
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.weightRegular};
`;

export const ButtonWrap = styled.div`
  margin: 10px 0;
`;

export const CancelButtton = styled.button`
  padding: 8px 15px;
  border: ${props => props.theme.borderGray};
  border-radius: 4px;
  background: none;
  font-size: 12px;
`;
export const DeleteButtton = styled(CancelButtton)`
  margin-left: 10px;
  border: 1px solid ${props => props.theme.mainPink};
  background: ${props => props.theme.mainPink};
  color: #fff;
`;
