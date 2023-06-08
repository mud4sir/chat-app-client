import React, { useContext } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu } from '@mui/material';
import { MenuOption } from '../../../styles/headerMenuStyles';
import { AuthContext } from '../../../context/AccountProvider';

const HeaderMenu = ({toggleDrawer}) => {
  const { setAccount } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    toggleDrawer();
  };

  const handleLogout = () => {
    setAnchorEl(null);
    window.localStorage.removeItem('account')
    setAccount(null);
  }
  return (
    <>
        <MoreVertIcon onClick={handleClick} />
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: "center"
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            <MenuOption onClick={handleClose}>Profile</MenuOption>
            <MenuOption onClick={handleLogout}>Logout</MenuOption>
        </Menu>
    </>
  )
}

export default HeaderMenu