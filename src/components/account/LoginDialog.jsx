import { Dialog, Box, ListItem } from '@mui/material'
import React from 'react'
import jwtDecode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import { dialogStyle, Component, Container, QrCode, GLogin, Title, StyledList } from '../../styles/loginDialogStyles';
import { qrCodeImage } from '../../constants/data'

const LoginDialog = () => {
    const onLoginSuccess = credentialResponse => {
        console.log(credentialResponse);
        const decode = jwtDecode(credentialResponse.credential);
        console.log(decode);
    }
    const onLoginFailure = () => {
        console.log('Login Failed');
    }

  return (
    <Dialog open={true} PaperProps = {{ sx: dialogStyle }}>
        <Component>
            <Container>
                <Title>Use WhatsApp on your computer</Title>
                <StyledList>
                    <ListItem>
                        1. Open WhatsApp on your phone
                    </ListItem>
                    <ListItem>
                        2. Tap Settings and select Linked devices
                    </ListItem>
                    <ListItem>
                        3. Tap on Link a device
                    </ListItem>
                </StyledList>
            </Container>
            <Box style={{position: 'relative'}}>
                <QrCode src={qrCodeImage} alt='qr code' />
                <GLogin>
                    <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginFailure}
                    />
                </GLogin>
            </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDialog