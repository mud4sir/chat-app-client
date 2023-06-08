import React from 'react'
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Header, Container } from '../../styles/profileStyles';
import Info from './Info';


const Profile = ({ toggleDrawer }) => {
  return (
    <Box>
        <Header>
            <ArrowBackIcon onClick={toggleDrawer}/>
            <Typography>Profile</Typography>
        </Header>
        <Container>
            <Info />
        </Container>
    </Box>
  )
}

export default Profile