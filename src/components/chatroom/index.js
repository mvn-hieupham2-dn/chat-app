import React from 'react';
import { AuthContext } from '../../context/AuthProvider';

const ChatRoom = () => {
    const {
        user: { displayName },
      } = React.useContext(AuthContext);
    return (
        <div>
            <h1>Hello World, {displayName}</h1>
        </div>
    );
};

export default ChatRoom;