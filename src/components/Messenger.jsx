import React from 'react'
import { Toolbar } from '@mui/material'
import LoginDialog from './account/LoginDialog'
import { Component, Header } from '../styles/messengerStyles'

const Messenger = () => {
  return (
    <Component>
        <Header>
            <Toolbar>
            </Toolbar>
        </Header>
        <LoginDialog />
    </Component>
  )
}

export default Messenger;