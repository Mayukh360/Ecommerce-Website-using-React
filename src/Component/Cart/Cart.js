import React,{useContext} from 'react'
import Modal from '../Portal/Modal'
import classes from './Cart.module.css'
import CartContext from '../Store/CartContext'
import CartItem from './CartItem'


export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;

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



  return (
    <Modal onHide={props.onHide}>
      {cartItems}
          <div className={classes.total} >
      <span>Total</span>
      <span>{totalAmount}</span>
    </div>
    <div className={classes.actions}>
      <button onClick={props.onHide} className={classes["button--alt"]} >
        Close
      </button>
      
       <button  className={classes.button}>Order </button>
    </div>
    </Modal>
  )
}
