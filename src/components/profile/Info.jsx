import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AccountProvider'
import { Image, ImageWrapper, Note, Text } from '../../styles/infoStyles';

const Info = () => {
  const {account} = useContext(AuthContext);
  return (
    <>
        <ImageWrapper>
            <Image src={account.picture} alt='dp'/>
        </ImageWrapper>
        <Text>
            <Typography>Your name</Typography>
            <Typography>{account.name}</Typography>
        </Text>
        <Box>
            <Note>This is not your username or pin. This name will be visible to all your WhatsApp contact.</Note>
        </Box>
        <Text>
            <Typography>About</Typography>
            <Typography>Eat Sleep Code, Repeat.</Typography>
        </Text>
    </>
  )
}

export default Info