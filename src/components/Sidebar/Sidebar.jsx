import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Sidebar.css'

function Sidebar(){


const recentItem = (topic) => ( 
  <div className='sidebar__recentItem'>
    <span className='sidebar__hash'>#</span>
    <p>{topic}</p>
  </div>
);

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img  src="https://images.unsplash.com/photo-1647350650908-c78791bf8efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt=""/>
        <AccountCircleIcon src=""/* {user.photoUrl} */ className="sidebar__avatar">
{/*         {user?.email[0]}
 */}        </AccountCircleIcon>
        <h2>{/* {user.displayName} */} </h2>
        <h4>{/* {user.email} */} </h4>
      </div>
    <div className='sidebar__stats'>
     
      <div className='sidebar__stat'> 
        <p>Who viewed you</p>
        <p className="sidebar__statNumber">2,543</p>
      </div>

      <div className='sidebar__stat'> 
        <p>Views on post</p>
        <p className="sidebar__statNumber">2,983</p>
      </div>
    </div>
    <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('maincra js')}
        {recentItem('games')}
        {recentItem('developer js')}
        {recentItem('design js')}
        {recentItem('vue js')}
        {recentItem('frontend')}
        {recentItem('hiring')}

      </div>
    
  </div>
  )
}

export default Sidebar;