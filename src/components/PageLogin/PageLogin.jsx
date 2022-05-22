import React from 'react'
import "./PageLogin.css"

import Feed from "../Feed/Feed"
import Login from "../Login/Login"

import Header from "../Header/Header"

const PageLogin = () => {
  return (
    <div className='container__pageLogin'>
      <Header/>
      <Login />
    </div>
  )
}

export default PageLogin