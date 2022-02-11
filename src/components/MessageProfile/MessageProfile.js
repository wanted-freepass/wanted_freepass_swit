import React from 'react';
import * as S from './MessageProfile.style';
import { useSelector } from 'react-redux';

import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import Message from './Message/Message';

const MessageProfile = ({ chatting, addChat }) => {
  const login = useSelector(state => state.loginSumbit);
  console.log(login.profileImage);
  // console.log('마이', chatting);

  return (
    <S.Container>
      <S.ProfileImg>
        <S.Img src={login.profileImage} />
      </S.ProfileImg>
      <S.ProfileInfo>
        <S.UserId>
          {login.userName}
          {login.userName && <p> ** </p>}
        </S.UserId>

        <Message />
      </S.ProfileInfo>
    </S.Container>
  );
};

// export default MessageProfile;
const mapStateProps = state => {
  return { chatting: state };
};

const mapDispatchToProps = dispatch => {
  return {
    addChat: text => dispatch(actionCreators.addChat(text)),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(MessageProfile);
