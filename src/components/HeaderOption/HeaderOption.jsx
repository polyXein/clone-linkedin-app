import React from 'react'
import './HeaderOption.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'

const HeaderOption = ({accountCircleIcon, Icon, title, onClick}) => {


  return (

    <>
<div>
    <div onClick={onClick} className='headerOption'>
      <Link className='link_icons_route'
      to="/"
      >
          {Icon && <Icon className="headerOption__icon" />}
        {accountCircleIcon &&  
        <AccountCircleIcon className="headerOption__icon me" src="" /* {user?.photoUrl} */ >
       {/*    {user?.email[0]} */}
        </AccountCircleIcon>
        
        }
      </Link>
        <h3 className='headerOption__title'>{title}</h3>
    </div>
</div>

    </>
  )
}

export default HeaderOption