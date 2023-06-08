import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AccountProvider';
import ChatIcon from '@mui/icons-material/Chat';
import {
    Component,
    Image,
    IconContaier
} from '../../../styles/headerStyles';
import HeaderMenu from './HeaderMenu';
import ProfileDrawer from '../../profile/ProfileDrawer';

const Header = () => {
    const { account } = useContext(AuthContext);
    const [openDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    }
  return (
        <>
            <Component>
                <Image src={account.picture} alt='dp' onClick={toggleDrawer}/>
                <IconContaier>
                    <ChatIcon />
                    <HeaderMenu toggleDrawer={toggleDrawer} />
                </IconContaier>
            </Component>
            <ProfileDrawer open={openDrawer} toggleDrawer={toggleDrawer} />
        </>
    )
}

export default Header