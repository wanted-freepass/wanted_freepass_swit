import React from 'react';
import styled from 'styled-components';
import { connect, useSelector } from 'react-redux';
import { actionCreators } from '../../../store';
import { addChat } from '../../../store/actions/content';
import newLine from '../../../utils/newLine';

function Message({ text, onDelBtnClick }) {
  // console.log('sss', text);
  const data = useSelector(state => state.addChat.list);
  console.log(data);
  return (
    <Content>
      <ChatData>
        {data.map((el, idx) => (
          <ChatDataContent key={idx}>
            <DataContent>{el}</DataContent>

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

const Content = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const ChatData = styled.div`
  padding: 0 15px 15px;
`;

const ChatDataContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const DataContentWrap = styled.div`
  display: flex;
`;

const DataContent = styled.div`
  margin-bottom: 20px;
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
