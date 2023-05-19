import React, { Fragment } from 'react';
import { useState, useRef, useContext, } from "react";
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import classes from "./AuthForm.module.css";
import AuthContext from '../store/AuthContext';
import CartContext from '../Component/Store/CartContext';
import Modal from '../Component/Portal/Modal';


export default function AuthForm(props) {
    const AuthCtx=useContext(AuthContext);
    // const cartCtx=useContext(CartContext);
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
    // const changedEmail=enteredEmail.replace("@","").replace(".","");
    
    const enteredPassword = passwordInputRef.current.value;
    // console.log(changedEmail);
     
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
    // .then(() => {
    //     const response = axios.get(
    //       `https://crudcrud.com/api/4441d0f2960d4dd09e63f185ca5ca5a9/${changedEmail}`
    //     );
    //     return response;
    //  // })
    //   .then((response)=>{
    //     console.log('resData',response.data);
//********************************************* */
// const productList = response.data.map((item) => {
//       return {
//         id: item._id,
//         name: item.title,
//         price: Number(item.price),
//         image: item.imageUrl,
//         amount: item.amount,
//       };
//     });
//     console.log("poductList",productList);
//      console.log(cartCtx);
//     // Accumulate the items in the cartItems array
     
//     const sum = productList.reduce((total, item) => {
//       return total + item.price;
//     }, 0);

   
    // productList.forEach((item) => {
    //   cartCtx.addItem({
    //     id: item.id, 
    //     name: item.title,
    //     price: item.price,
    //     image: item.imageUrl,
    //     amount: Number(item.amount),
    //   });
    // });
    

//     // Add all the items to the cart
    
//     // cartCtx.addItem(cartItems);
    
   
//     // console.log("cartItems",cartItems);
  
//     console.log(sum);

  //********************* */
      // })
    .catch((err)=>{
      alert(err.message);
    })
  };


  return (<Fragment>
    {!AuthCtx.isLoggedIn && <Modal >
      <section className={classes.auth}>
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
  </section> </Modal>}
  {AuthCtx.isLoggedIn && <h2 className={classes.loggedInmessage}>You Are already logged in, Visit Product section to see our Products</h2>}
  </Fragment>
  )
}