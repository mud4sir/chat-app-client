import { Dialog, ListItem } from '@mui/material'
import React, { useContext } from 'react'
import jwtDecode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import { dialogStyle, Component, Container, QrCode, GLogin, Title, StyledList, RightSideWrapper } from '../../styles/loginDialogStyles';
import { qrCodeImage } from '../../constants/data'
import { AuthContext } from '../../context/AccountProvider';

const LoginDialog = () => {
    const { setAccount } = useContext(AuthContext);
    const onLoginSuccess = credentialResponse => {
        const decode = jwtDecode(credentialResponse.credential);
        setAccount(decode);
        window.localStorage.setItem('account', JSON.stringify(decode));
    }
    const onLoginFailure = () => {
        console.log('Login Failed');
    }

  return (
    <Dialog open={true} PaperProps = {{ sx: dialogStyle }} hideBackdrop>
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
            <RightSideWrapper>
                <QrCode src={qrCodeImage} alt='qr code' />
                <GLogin>
                    <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginFailure}
                    />
                </GLogin>
            </RightSideWrapper>
        </Component>
    </Dialog>
  )
}

export default LoginDialog