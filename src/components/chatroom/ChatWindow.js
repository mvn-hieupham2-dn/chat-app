import { UserAddOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Tooltip, Avatar, Form, Input, Alert } from 'antd';
// import Message from './Message';
// import { AppContext } from '../../Context/AppProvider';
// import { addDocument } from '../../firebase/services';
import { AuthContext } from '../../Context/AuthProvider';
// import useFirestore from '../../hooks/useFirestore';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

export default function ChatWindow() {
  // const { selectedRoom, members, setIsInviteMemberVisible } =
  //   useContext(AppContext);
  const {
    user: { uid, photoURL, displayName },
  } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState('');
  const [form] = Form.useForm();
  const inputRef = useRef(null);
  const messageListRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = () => {
    // addDocument('messages', {
    //   text: inputValue,
    //   uid,
    //   photoURL,
    //   roomId: selectedRoom.id,
    //   displayName,
    // });

    form.resetFields(['message']);

    // focus to input again after submit
    if (inputRef?.current) {
      setTimeout(() => {
        inputRef.current.focus();
      });
    }
  };

  // const condition = React.useMemo(
  //   () => ({
  //     fieldName: 'roomId',
  //     operator: '==',
  //     compareValue: selectedRoom.id,
  //   }),
  //   [selectedRoom.id]
  // );

  // const messages = useFirestore('messages', condition);

  // useEffect(() => {
  //   // scroll to bottom after message changed
  //   if (messageListRef?.current) {
  //     messageListRef.current.scrollTop =
  //       messageListRef.current.scrollHeight + 50;
  //   }
  // }, [messages]);

  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className='header__infor'>
          <p className='header__title'>Room 1</p>
          <span className='header__description'>Day la room 1</span>
        </div>
      </HeaderStyled>

      <div>
        <ButtonGroupStyled icon={<UserAddOutlined />} type='text'>Mời</ButtonGroupStyled>
        <Avatar.Group size='small' maxCount={2}>
          <Tooltip title='a'>
            <Avatar >
              A
            </Avatar>
          </Tooltip>
          <Tooltip title='b'>
            <Avatar >
              B
            </Avatar>
          </Tooltip>
          <Tooltip title='c'>
            <Avatar >
            C
            </Avatar>
          </Tooltip>
        </Avatar.Group>
      </div>
      <ContentStyled>
      <MessageListStyled></MessageListStyled>
      <FormStyled>
        <Form.Item>
          <Input />
        </Form.Item>
        <ButtonGroupStyled>
          Gửi
        </ButtonGroupStyled>
      </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  );
}
