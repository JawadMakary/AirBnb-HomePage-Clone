import React,{useEffect} from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import {auth} from './firebase'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';

function App() {
  const dispatch=useDispatch()
  const user=useSelector(selectUser)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL,
        }))
      }
    })
  },[])
  return (

    <Router>
    {!user?(
      <Login />
    ):(
     <div className="app">
     <Header />
     
      
       <Switch>

      
         <Route path="/search">
           <SearchPage />
         </Route>
         <Route exact path="/">
           <Home />
           <Footer />
       
         </Route>
       </Switch>
     
      
       
      
     </div>
    )}


 </Router>
  );
}

export default App;