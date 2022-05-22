import React, {createContext, useState } from 'react'

import useLocalStorage from './useLocalStorage'
const TodoContext = createContext();

function TodoProvider(props){
    
/*   const tryList = [
    {
      name: "Bad bunny",
      description: "Un verano sin ti",
      message: "quiero irme a vivir a medallo",
      photoUrl: "nu hay foto",
    },
  ] 
     */
  const {
    item: theposts, 
    saveItem,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])

  const[input, setInput] = useState('');  
/*   const[theposts, setThePosts] = useState(item);
 */
  const totalItems = theposts.length;
  console.log(totalItems);
  
  const addPost = (e) =>{
    e.preventDefault();
    
    const newPost = [...theposts]
    newPost.unshift({
      name: "User name",
      description: "description",
      message: input,
      photoUrl: "",
    })
    saveItem(newPost);
    setInput("");
  }

  return(
    <TodoContext.Provider value={{
        error,
        loading,
        addPost,
        saveItem,
        totalItems,
        input,
        setInput,
        theposts, 
        
    }}>
        {props.children}
    </TodoContext.Provider>
  );
}
export {TodoProvider, TodoContext};
