import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import * as S from './Main.style';

import ProfileModal from '../../components/ProfileModal';
import Channels from './Channels';
import Textarea from './Textarea';
import MessageProfile from '../../components/MessageProfile';
import ChatList from '../../components/ChatList';
import { useModalChecked } from '../../hooks/useModalChecked';

const Main = () => {
  const [mockData, setMockData] = useState([]);

  const inputData = useSelector(state => state.addChat.list);
  const login = useSelector(state => state.loginSubmit);

  const [checked, isModalChecked] = useModalChecked();

  const RandomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
  const firstName = (login.userName || '').split('', 1);

  const messagesRef = useRef();
  // const message = document.querySelector(message);
  // const scrollToBottom = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // };

  console.log(messagesRef);

  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [inputData]);

  useEffect(() => {
    fetch('http://localhost:3000/data/mockData.json')
      .then(response => response.json())
      .then(data => setMockData(data));
  }, []);

  return (
    <S.Container>
      {!login.loginSubmit && (
        <>
          <ProfileModal
            checked={checked}
            isModalChecked={isModalChecked}
            isLogged={login.loginSubmit}
          />
          <div
            className="modal_back"
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              width: '100%',
              height: '100%',
              // position: 'absolute',
              // zIndex: '9',
              // left: '0',
            }}
          />
        </>
      )}

      <Channels />
      <S.Wrapper>
        <S.MessageContainer>
          {mockData.chatData?.map(chat => (
            <ChatList key={chat.id} chat={chat} />
          ))}
          <MessageProfile
            RandomColor={RandomColor}
            firstName={firstName}
            inputData={inputData}
            ref={messagesRef}
          />
        </S.MessageContainer>
        <Textarea />
      </S.Wrapper>
    </S.Container>
  );
};

export default Main;
