import React from 'react';
import * as S from './MessageProfile.style';

import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import Message from './Message/Message';

const MessageProfile = ({ chatting, addChat }) => {
  // console.log('마이', chatting);

  return (
    <S.Container>
      <S.ProfileImg>
        <S.Img src="img/profile.png" />
      </S.ProfileImg>
      <S.ProfileInfo>
        <S.UserId>홍유진</S.UserId>
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
