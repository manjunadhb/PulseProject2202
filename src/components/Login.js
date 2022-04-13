import React,{useRef} from 'react'
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import logo from '../media/logo.png';

function Login() {
    let userNameRef = useRef()
    let passwordRef = useRef()
    let navigate = useNavigate()
    let dispatch = useDispatch()
  return (
    <div>
      
       <img src={logo}></img>  
       <div className='group'>
           <label className='labelLogin'>UserName:</label>
           <input className='inputLogin' type='text' ref={userNameRef}></input>
       </div>
       <div className='group'>
           <label className='labelLogin'>Password:</label>
           <input className='inputLogin' type='password' ref={passwordRef}></input>
       </div>
       <button onClick={()=>{
           if(userNameRef.current.value=='username' &&
              passwordRef.current.value=='password')
            {
            let collectedData={un:userNameRef.current.value,
                pwd:passwordRef.current.value,Login:"yes"}

                dispatch({type:'login',value:collectedData})
                navigate('/home',{state:collectedData})
            }else{

            alert('invalid Username or Password')

            }
       }}>Login</button>
         </div>
  )
}

export default Login