import React,{useContext,useState} from 'react'
import Modal from '../Portal/Modal'
import classes from './Cart.module.css'
import CartContext from '../Store/CartContext'
import CartItem from './CartItem'
import { Alert } from 'react-bootstrap';


export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);
  const totalAmount = cartCtx.totalAmount;
  const hasItem = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      price: item.price,
    });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };



  const cartItems=(
    <ul className={classes["cart-items"]}>
    {cartCtx.items.map((item) => (
      <CartItem
       image ={item.image}
        price={item.price}
        amount={item.amount}
        name={item.name}
        key={item.id}
        onRemove={() => cartItemRemoveHandler(item.id)}
        onAdd={() => cartItemAddHandler(item)}
      ></CartItem>
    ))}
  </ul>
  );

  const orderPlaceHandler=()=>{
    cartCtx.clearCart();
    setShowAlert(true);
   
  }

  return (
    <Modal onHide={props.onHide}>
      {cartItems}
          <div className={classes.total} >
      <span>Total</span>
      <span>{totalAmount}₹</span>
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
