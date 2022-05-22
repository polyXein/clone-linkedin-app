import React, {useState} from 'react'
import './Login.css'
import {Link} from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [password, setPassword] = useState('');



         const  register = () =>{
          if(!name){
            return alert("please enter a full name")
          }
          if(!email){
            return alert("please enter a full name")
          }
          if(!password){
            return alert("please enter a full name")
          }
        
         /*  auth.createUserWithEmailAndPassword(email, password)
          .then((userAuth) => {
            userAuth.user.updateProfile({
              displayName: name,
              photoURL: profilePic,
            })
          .then(() =>{
            dispatch(
              login({ 
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic
            }))
          })  // if any problem? then catch error!!

          }).catch(error => alert(error));
          //if success login => alert :)
          alert("Success Register") */
         
        };
        
      
    
  const loginToApp = (e) =>{
    e.preventDefault();
/* 
auth.signInWithEmailAndPassword(email, password)
.then(userAuth =>{
dispatch(login({
email: userAuth.user.email,
uid: userAuth.user.uid,
displayName: userAuth.user.displayName,
profileUrl: userAuth.user.photoURL
}))
}).catch(error => alert(error))
alert("Succes Login") */
};


const stateName = (e) =>{
  setName(e.target.value); // 1. catch value of input .then 
                            //2. setName(value of input)
                            //3. setName give value to state "name"
  }
  
const statePassword = (e) =>{
setPassword(e.target.value); //catch value of input => 
}

const stateEmail = (e) =>{
  setEmail(e.target.value);
  }

  const stateProfile = (e) =>{
    setProfilePic(e.target.value)
  }

    
  return (
    <div className='login'>
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
        alt=""/>
        <form>
            <input value={name} onChange={stateName}
            type="text" placeholder="full name (required if registering)" />
            <input
            value={profilePic}
            onChange={stateProfile}
             placeholder='Profile pic URL (optional)' type="text" />
          
            <input value={email} onChange={stateEmail}
            type="text" placeholder="dev@gmail.com (required if registering)" />

            <input value={password} onChange={statePassword}
             placeholder="Password" type="password" />
      
  
            <button className='botton_route'
            onClick={loginToApp}
             type="submit">
                 <Link className='route_link_tohome'
                to="/home">
                   <p>Sign In</p>
                </Link>
               </button>

        </form>
        <p>Not a member { " " }
            <span
            onClick={register}
            className='login__register'>Register now</span>
        </p>
        </div>
  )
}

export default Login