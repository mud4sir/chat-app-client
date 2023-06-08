import React from 'react'
import { Typography } from '@mui/material';
import { emptyChatImage } from '../../constants/data';
import { Component, ChatImage, TxtContainer, HrLine } from '../../styles/emptyChatStyles';


const EmptyChat = () => {
  return (
    <Component>
        <ChatImage src={emptyChatImage} alt='background empty chat' />
        <TxtContainer>
            <Typography>WhatsApp Web</Typography>
            <Typography>Now Send and Recieve messages without keeping your phone online use whatsapp on upto 4 linked devices and 1 phone at the same time</Typography>
        </TxtContainer>
        <HrLine />
        <TxtContainer>
            <Typography>Make calls from desktop with WhatApp for windows</Typography>
        </TxtContainer>
    </Component>
  )
}

export default EmptyChat