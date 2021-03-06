import React from 'react';
import * as S from './MessageProfile.style';
import { useSelector } from 'react-redux';

import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import Message from './Message/Message';
import date from '../../utils/date';

const MessageProfile = ({ RandomColor, firstName, inputData, ref }) => {
  const login = useSelector(state => state.loginSubmit);

  return (
    <S.Container>
      <S.ProfileImg RandomColor={RandomColor}>
        {!!login.profileImage ? (
          <S.Img src={login.profileImage} />
        ) : (
          <S.FirstName>{firstName}</S.FirstName>
        )}
      </S.ProfileImg>
      <S.ProfileInfo>
        <S.UserIdWrap>
          <S.UserId>
            {login.userName}
            &nbsp;
            {login.userName && <span style={{ color: '#FF505F' }}> ** </span>}
          </S.UserId>
          <S.Date>{date()}</S.Date>
        </S.UserIdWrap>
        <Message inputData={inputData} ref={ref} />
      </S.ProfileInfo>
    </S.Container>
  );
};

const mapStateProps = state => {
  return { chatting: state };
};

const mapDispatchToProps = dispatch => {
  return {
    addChat: text => dispatch(actionCreators.addChat(text)),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(MessageProfile);
