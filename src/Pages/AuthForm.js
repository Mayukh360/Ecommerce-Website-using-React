import React, { Fragment } from 'react';
import { useState, useRef, useContext, } from "react";
import { useNavigate } from 'react-router-dom';

import classes from "./AuthForm.module.css";
import AuthContext from '../store/AuthContext';

export default function AuthForm() {
    const AuthCtx=useContext(AuthContext);
  const history= useNavigate()

  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    localStorage.setItem('email',enteredEmail);
    const enteredPassword = passwordInputRef.current.value;
    console.log(enteredEmail, enteredPassword);
     
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDXx5szR2zhd9OQlqBegt7PJUE8RXQAqAk";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXx5szR2zhd9OQlqBegt7PJUE8RXQAqAk";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setIsLoading(false);
      if (response.ok) {
        return response.json();
      } else {
        //The responde holds error
        return response.json().then((data) => {
          let errorMessage = "Authentication Failed,please Check input field";
         
          throw new Error(errorMessage)
        });
      }
    })
    .then((data)=>{
      AuthCtx.login(data.idToken);
      
      AuthCtx.autoLogout();
      // console.log(data.idToken);
      history('/');
    })
    .catch((err)=>{
      alert(err.message);
    })
  };


  return (<Fragment>
    {!AuthCtx.isLoggedIn && <section className={classes.auth}>
    <h1>{isLogin ? "Login" : "Sign Up"}</h1>
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" ref={emailInputRef} required />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          ref={passwordInputRef}
          required
        />
      </div>

      <div className={classes.actions}>
        {!isLoading && (
          <button>{isLogin ? "Login" : "Create Account"}</button>
        )}
        {isLoading && <p>Sending Request... </p>}
        <button
          type="button"
          className={classes.toggle}
          onClick={switchAuthModeHandler}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
      </div>
    </form>
  </section> }
  {AuthCtx.isLoggedIn && <h2 className={classes.loggedInmessage}>You Are already logged in, Visit Product section to see our Products</h2>}
  </Fragment>
  )
}