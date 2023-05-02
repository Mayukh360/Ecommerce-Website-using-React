import React from 'react'
import Modal from '../Portal/Modal'
import classes from './Cart.module.css'


export default function Cart(props) {
  return (
    <Modal>
          <div className={classes.total} >
      <span>Total</span>
      <span>200</span>
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
