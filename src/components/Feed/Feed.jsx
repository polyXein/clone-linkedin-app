import React, { useContext } from 'react'

import './Feed.css'

import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';

import Posts from '../Post/Posts'
import InputOption from '../InputOption/InputOption'


import FlipMove from 'react-flip-move';


import { TodoContext } from './TodoContext';


const Feed = () => {

const {
  error,
  loading,
  addPost,
  saveItem,
  totalItems,
  input,
  setInput,
  theposts, 
  setThePosts,
} = useContext(TodoContext);

/* 
const tryList = [
  {
    name: "Bad bunny",
    description: "Un verano sin ti",
    message: "quiero irme a vivir a medallo",
    photoUrl: "nu hay foto",
  },
] */


const stateInput = (e) =>{
  setInput(e.target.value);
}

/* Add to d atabase post with his elements */



  return (
    <>
    <div className='feed'>
        <div className='feed__inputContainer'>
           <div className='feed__input'>
            <CreateIcon />
            <form className="form__feed">
            <input
            onChange={stateInput}
            value={input}
            type="text" />
            <button
            onClick={addPost}
            type='submit'>Send</button>
          </form>

          </div>
          <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
            <InputOption Icon={SubscriptionsIcon} title="Video" color="#70b5f9" />
            <InputOption Icon={EventNoteIcon} title="Event" color="#70b5f9" />
            <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#70b5f9" />
          </div>
        </div>  
        <FlipMove>

        { 
          theposts.map(post => (

            <Posts
            key={post.message}
            name={post.name}
            description={post.description}
            message={post.message}
            photoUrl={post.photoUrl}
            />

          )
          )
        }
        </FlipMove>

    </div>
    </>
  ) 
}

export default Feed