import React, { useState, useEffect } from "react";
import Modal from "../Portal/Modal";
import classes from "./Cart.module.css";

import CartItem from "./CartItem";
import { Alert } from "react-bootstrap";

import axios from "axios";

export default function Cart(props) {
  const [productList, setProductList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  // const hasItem = cartCtx.items.length > 0;
  //******* */
  const enteredEmail = localStorage.getItem("email");
  const changedEmail = enteredEmail.replace("@", "").replace(".", "");

  async function fetchData() {
    const response = await axios.get(
      `https://crudcrud.com/api/34973572ec854db9a61f8e68aa171895/${changedEmail}`
    );
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
    // console.log(productList);
  }

  useEffect(() => {
    fetchData();
    // console.log('Cart is executed');
  }, []);
  //***** */

  async function cartItemRemoveHandler(id) {
    await axios.delete(
      `https://crudcrud.com/api/34973572ec854db9a61f8e68aa171895/${changedEmail}/${id}`
    );
    fetchData();
  }

  const sum = productList.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {productList.map((item) => (
        <CartItem
          image={item.image}
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
       axios.delete(
        `https://crudcrud.com/api/34973572ec854db9a61f8e68aa171895/${changedEmail}/${item.id}`
      );
    }

    setProductList([]);
    setShowAlert(true);
  }
  const hasItem = productList.length > 0;
  return (
    <Modal onHide={props.onHide}>
     
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>{sum}₹</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHide} className={classes["button--alt"]}>
          Close
        </button>

        {hasItem && (
          <button onClick={orderPlaceHandler} className={classes.button}>
            Order{" "}
          </button>
        )}
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
  );
}
