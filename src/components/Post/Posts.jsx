import React, { forwardRef} from 'react'
import './Posts.css'

import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

import InputOption from '../InputOption/InputOption'


const Posts = forwardRef( ({name, description, message, photoUrl}, ref) => {
  
  
  return (
    <div ref={ref} className='post'>
      <div className="post__header">
        <AccountCircleIcon src={photoUrl} className="avatar" />
        <div className="post__info">
          <h2> {name} </h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post__body' >
        <p>{message} </p>
      </div>
        
    <div className="post__buttons">
      <InputOption Icon={ThumbUpOffAltOutlinedIcon} title="Like" color="gray" />
      <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
      <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
      <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
    </div>

    </div>
  )
})


export default Posts