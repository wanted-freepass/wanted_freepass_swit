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
  console.log(inputData);
  console.log(messagesRef.current);

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
      {!checked && !login.loginSubmit ? (
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
              position: 'absolute',
              left: '0',
              zIndex: '12',
            }}
          />
        </>
      ) : (
        alert('채팅할 준비가 되었습니다!') && (
          <S.Wrapper>
            <S.MessageContainer ref={messagesRef}>
              {mockData.chatData?.map(chat => (
                <ChatList key={chat.id} chat={chat} />
              ))}
              <MessageProfile RandomColor={RandomColor} firstName={firstName} />
            </S.MessageContainer>
            <Textarea />
          </S.Wrapper>
        )
      )}

      <Channels />
      <S.Wrapper>
        <S.MessageContainer ref={messagesRef}>
          {!checked && !login.loginSubmit
            ? null
            : mockData.chatData?.map(chat => (
                <ChatList key={chat.id} chat={chat} />
              ))}
          {!checked && !login.loginSubmit ? null : (
            <MessageProfile RandomColor={RandomColor} firstName={firstName} />
          )}
        </S.MessageContainer>
        <Textarea />
      </S.Wrapper>
    </S.Container>
  );
};

export default Main;
