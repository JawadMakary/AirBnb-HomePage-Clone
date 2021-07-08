import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase' 
import './Login.css'
 import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import './Login.css' 
const Login = () => {
     const dispatch=useDispatch();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL
            }))
        })
        .catch((error)=>alert(error.message))
    } 
  
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" />
            <Button variant="contained" color="secondary" onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
