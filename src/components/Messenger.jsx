import React, { useContext } from 'react'
import { Toolbar } from '@mui/material'
import LoginDialog from './account/LoginDialog'
import { Component, Header, ChatHeader } from '../styles/messengerStyles'
import { AuthContext } from '../context/AccountProvider';
import ChatDialog from './chat/ChatDialog';

const Messenger = () => {
  const { account } = useContext(AuthContext);
  
  return (
    <Component>
      {
        account ? 
          <>
            <ChatHeader>
              <Toolbar>
              </Toolbar>
            </ChatHeader>
            <ChatDialog />
          </>
        : <>
            <Header>
              <Toolbar>
              </Toolbar>
            </Header>
            <LoginDialog />
         </>
      }
    </Component>
  )
}

export default Messenger;