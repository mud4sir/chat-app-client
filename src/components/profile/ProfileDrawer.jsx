import { Drawer } from '@mui/material'
import React from 'react'
import Profile from './Profile';
import { drawerStyles } from '../../styles/profileDrawerStyles';



const ProfileDrawer = ({open, toggleDrawer}) => {

  return (
        <Drawer
        style={{zIndex: '99999'}}
        PaperProps = {{ sx: drawerStyles}}
        anchor={'left'}
        open={open}
        onClose={toggleDrawer}
        hideBackdrop
        >
            <Profile toggleDrawer={toggleDrawer}/>
        </Drawer>
    )
}

export default ProfileDrawer