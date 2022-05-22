import React from 'react'
import './Header.css'

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import HeaderOption from '../HeaderOption/HeaderOption'



const Header = () => {
  
const logoutApp = () =>{

}

  return (
    <div className="header">

      <div className='header__left'>
         <img src="https://w7.pngwing.com/pngs/402/997/png-transparent-linkedin-logo-computer-icons-facebook-user-profile-facebook-blue-angle-text.png" alt="" />
        <div className='header__search'>
            <SearchIcon />
           <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className='header__right'>
    <HeaderOption Icon={HomeIcon} title="Home" />
    <HeaderOption Icon={SupervisorAccount} title="My Network" />
    <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
    <HeaderOption Icon={ChatIcon} title="Chat" />
    <HeaderOption Icon={NotificationsNoneIcon} title="Notifications" />
      <HeaderOption
      title="me"
      accountCircleIcon={true}
      onClick={logoutApp}/>
   </div>

    </div>
  )
}

export default Header