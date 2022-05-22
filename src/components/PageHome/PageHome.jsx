import React from 'react'
import "./PageHome.css"

import Header from "../Header/Header"
import Feed from "../Feed/Feed"
import Sidebar from '../Sidebar/Sidebar'


const PageHome = () => {
  return (
    <div className='container__pageHome'>
      <Header />
      <div className='container_content_main_'>
        <Sidebar/>
        <Feed/>
      </div>
    </div>
  )
}

export default PageHome