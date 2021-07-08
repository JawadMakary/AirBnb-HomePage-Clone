import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';

const Header = () => {
    const history=useHistory()
    const user=useSelector(selectUser)
    const dispatch=useDispatch()
    const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })
    
        
    }
    return (
        <div className="header">
           <img 
           onClick={()=>history.push('/')}
           className="header__icon"
           src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png
           "
            alt="airbnb logo" />
            <div className="header__center">
                <input type="text" placeholder="Start your search" />
                <div className="header__search">
                <SearchIcon className="header__search" />
                </div>
               
            </div>
            <div className="header__right">
                <p style={{cursor:'pointer'}} >Become a host</p>
                <IconButton>

            
                <LanguageIcon />
                </IconButton>
                <IconButton>
                <ExpandMoreIcon />
                </IconButton>
                <Avatar style={{cursor:'pointer'}} onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    )
}

export default Header
