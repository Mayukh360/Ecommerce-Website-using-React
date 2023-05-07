import React, { useState, useEffect } from 'react'
import AuthContext from './AuthContext';

export default function AuthContextProvider(props)  {
    let initialToken=localStorage.getItem('token');
    const [token,setToken]=useState(initialToken);

    function autoLogoutHandler(){
      setTimeout(()=>{
        console.log('You have been logged out');
        localStorage.removeItem('token');
        initialToken=null;
      },200000)
    }
    useEffect(()=>{
      autoLogoutHandler();
    },[])

    const userIsLoggedIn= !!token;

    const loginhandler=(token)=>{
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token');
    }

    const contextValue={
        token: token,
        isLoggedIn : userIsLoggedIn,
        login : loginhandler,
        logout : logoutHandler,
        autoLogout:autoLogoutHandler
    }


  return (
    <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
  )
}
