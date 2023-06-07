import { Dialog, Box } from '@mui/material'
import React from 'react'
import { MenuWrapper, dialogStyle, Component } from '../../styles/chatDialogStyles'
import Menu from './menu/Menu';

const ChatDialog = () => {
  return (
    <Dialog open={true} PaperProps = {{ sx: dialogStyle }} hideBackdrop>
      <Component>
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
        <Box>
          Empty Chat          
        </Box>
      </Component>
    </Dialog>
  )
}

export default ChatDialog