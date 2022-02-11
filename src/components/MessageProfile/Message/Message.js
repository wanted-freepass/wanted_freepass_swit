import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { actionCreators } from '../../../store';

function Message({ text, onDelBtnClick }) {
  console.log('sss', text);
  return (
    <Content>
      안녕<DelButton onClick={onDelBtnClick}>DEL</DelButton>
    </Content>
  );
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelBtnClick: () => dispatch(actionCreators.deleteChat(ownProps.id)),
  };
};
const Content = styled.li`
  margin-bottom: 20px;
  background-color: red;
`;
const DelButton = styled.button`
  background: none;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 10px;
`;

export default connect(null, mapDispatchToProps)(Message);
