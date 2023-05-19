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
    const response = await fetch(
      `https://e-commerce-2-ad090-default-rtdb.firebaseio.com//user/${changedEmail}.json`
    );
    const data = await response.json();
    if (data) {
      const productList = Object.keys(data).map((key) => ({
        id: key,
        name: data[key].title,
        price: Number(data[key].price),
        image: data[key].imageUrl,
        amount: data[key].amount,
      }));
      setProductList(productList);
      console.log(productList);
    } else {
      setProductList([]);
    }
  }

  useEffect(() => {
    fetchData();
    // console.log('Cart is executed');
  }, []);
  //***** */

  async function cartItemRemoveHandler(id) {
    try {
      await axios.delete(
        `https://e-commerce-2-ad090-default-rtdb.firebaseio.com/user/${changedEmail}/${id}.json`
      );
      fetchData();
    } catch (error) {
      console.log(error);
    }
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

    try {
      for (const item of productList) {
        axios.delete(
          `https://e-commerce-2-ad090-default-rtdb.firebaseio.com/user/${changedEmail}/${item.id}.json`
        );
      }

      setProductList([]);
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
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
