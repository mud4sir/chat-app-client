import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AccountProvider';
import ChatIcon from '@mui/icons-material/Chat';
import {
    Component,
    Image,
    IconContaier
} from '../../../styles/headerStyles';
import HeaderMenu from './HeaderMenu';

const Header = () => {
    const { account } = useContext(AuthContext);

  return (
    <Component>
        <Image src={account.picture} alt='dp'/>
        <IconContaier>
            <ChatIcon />
            <HeaderMenu />
        </IconContaier>
    </Component>
  )
}

export default Header