import React from 'react';
import styled from 'styled-components';
import { connect, useSelector } from 'react-redux';
import { actionCreators } from '../../../store';
import { addChat } from '../../../store/actions/content';
import newLine from '../../../utils/newLine';

function Message({ text, onDelBtnClick }) {
  const data = useSelector(state => state.addChat.list);

  console.log(data);

  return (
    <Content>
      <ChatData>
        {data.map((el, idx) => (
          <ChatDataContent key={idx}>
            <p>{el}</p>
            <DelButton onClick={onDelBtnClick}>DEL</DelButton>
          </ChatDataContent>
        ))}
      </ChatData>
    </Content>
  );
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onDelBtnClick: () => dispatch(actionCreators.deleteChat(ownProps.id)),
//   };
// };

const Content = styled.p`
  margin-bottom: 20px;
  background-color: red;
`;

const ChatData = styled.p``;

const ChatDataContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DelButton = styled.button`
  background: none;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 10px;
`;

// export default connect(null, mapDispatchToProps)(Message);
export default Message;
