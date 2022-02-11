import React, { useState, useEffect } from 'react';
import * as S from './Main.style';
import ProfileModal from '../../components/ProfileModal';
import Channels from './Channels';
import Textarea from './Textarea';
import MessageProfile from '../../components/MessageProfile';
import ChatList from '../../components/ChatList';

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/mockData.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <S.Container>
      <ProfileModal />
      <Channels />

      <S.Wrapper>
        <Textarea />
        <S.MessageContainer>
          {data.chatData?.map(chat => (
            <ChatList key={chat.id} chat={chat} />
          ))}
          <MessageProfile />
        </S.MessageContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Main;
