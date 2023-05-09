import React,{useContext,useState,useEffect} from 'react'
import Modal from '../Portal/Modal'
import classes from './Cart.module.css'
import CartContext from '../Store/CartContext'
import CartItem from './CartItem'
import { Alert } from 'react-bootstrap';

import axios from 'axios'


export default function Cart(props) {
  const [productList, setProductList] = useState([]);
 
  const cartCtx = useContext(CartContext);
 
  const [showAlert, setShowAlert] = useState(false);
  
  // const hasItem = cartCtx.items.length > 0;
  //******* */
  const enteredEmail=localStorage.getItem('email');
  const changedEmail=enteredEmail.replace("@","").replace(".","");
 
  async function fetchData() {
    const response = await axios.get(`https://crudcrud.com/api/5179291c79844f38a688deab9be73e12/${changedEmail}`);
    const productList = response.data.map((item) => {
      return {
        id: item._id,
        name: item.title,
        price: Number(item.price),
        image: item.imageUrl,
        amount: item.amount,
      };
    });
    setProductList(productList);
    console.log(productList);
  }    


 useEffect(()=>{
  fetchData();
 },[])
//***** */


  async function cartItemRemoveHandler (id) {
    await axios.delete(`https://crudcrud.com/api/5179291c79844f38a688deab9be73e12/${changedEmail}/${id}`)
    fetchData();
  };

    const sum = productList.reduce((total, item) => {
      return total + item.price;
    }, 0);

  const cartItems=(
    <ul className={classes["cart-items"]}>
    {productList.map((item) => (
      <CartItem
       image ={item.image}
        price={item.price}
        amount={item.amount}
        name={item.name}
        key={item.id}
        onRemove={() => cartItemRemoveHandler(item.id)}
      
      ></CartItem>
    ))}
  </ul>
  );

  async function orderPlaceHandler() {
    if (productList.length === 0) return;
  
    for (const item of productList) {
      await axios.delete(
        `https://crudcrud.com/api/5179291c79844f38a688deab9be73e12/${changedEmail}/${item.id}`
      );
    }
    
    setProductList([]);
    setShowAlert(true);
  }
  const hasItem=productList.length;
  return (
    <Modal onHide={props.onHide}>
      {!hasItem && <h2>Loading...</h2>}
      {cartItems}
          <div className={classes.total} >
      <span>Total</span>
      <span>{sum}₹</span>
    </div>
    <div className={classes.actions}>
      <button onClick={props.onHide} className={classes["button--alt"]} >
        Close
      </button>
      
      {hasItem && <button onClick={orderPlaceHandler} className={classes.button}>Order </button>}
    </div>
    <Alert
        variant="success"
        show={showAlert}
        onClose={() => setShowAlert(false)}
        dismissible
      >
        Thanks for shopping with us! Please visit us again.
      </Alert>
    </Modal>
  )
}