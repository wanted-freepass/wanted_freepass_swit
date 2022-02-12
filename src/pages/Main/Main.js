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
  const [data, setData] = useState([]);

  const chatList = useSelector(state => state.list);
  const [checked, isModalChecked] = useModalChecked();
  const login = useSelector(state => state.loginSubmit);

  const RandomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
  const firstName = (login.userName || '').split('', 1);

  const scrollRef = useRef();

  const scrollToMyRef = () => {
    const scroll =
      scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
    scrollRef.current.scrollTo(0, scroll);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/mockData.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    scrollToMyRef();
  }, [chatList]);

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
            <S.MessageContainer ref={scrollRef}>
              {data.chatData?.map(chat => (
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
        <S.MessageContainer ref={scrollRef}>
          {!checked && !login.loginSubmit
            ? null
            : data.chatData?.map(chat => (
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
