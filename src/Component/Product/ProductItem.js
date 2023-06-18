import React, { Fragment, useState } from "react";
import { Button, Col, Container, Row, Alert } from "react-bootstrap";
import classes from './Product.module.css'
import Shirt from '../../assets1/Shirt.jpeg'
import Jacket from '../../assets1/Jacket.jpg'
import Blazer from '../../assets1/Casual Blazer.jpg'
import Sweater from '../../assets1/Sweater.avif'
import Grey from '../../assets1/Grey.jpeg'
import Blue from '../../assets1/Blue.webp'
import Denim from '../../assets1/Denim.webp'
import Virginia from '../../assets1/Virginia.webp'
import {  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const productsArr = [
  {
    title: "Shirt",
    price: 700,
    imageUrl:
      Shirt,
    amount: 1,
  },

  {
    title: "Jacket",
    price: 1100,
    imageUrl:
      Jacket,
    amount: 1,
  },
  {
    title: "Casual Blazer",
    price: 3000,
    imageUrl:
      Blazer,
    amount: 1,
  },
  {
    title: "Sweater",
    price: 1800,
    imageUrl:
      Sweater,
    amount: 1,
  },
  {
    title: "Grey T-Shirt",
    price: 1200,
    imageUrl:
      Grey,
    amount: 1,
  },
  {
    title: "Blue T-Shirt",
    price: 1500,
    imageUrl:
      Blue,
    amount: 1,
  },
  {
    title: "Denim Jeans",
    price: 2500,
    imageUrl:
      Denim,
    amount: 1,
  },
  {
    title: "Virginia Cavaliers",
    price: 1000,
    imageUrl:
      Virginia,
    amount: 1,
  },
  
  
];

export default function ProductItem() {
  
  const navigate = useNavigate();

  const enteredEmail = localStorage.getItem("email");
  const changedemail = enteredEmail.replace("@", "").replace(".", "");
  async function btnClickHandler(item) {
    toast.dark(`${item.title} added to cart`);
    await fetch(
      `https://e-commerce-2-ad090-default-rtdb.firebaseio.com//user/${changedemail}.json`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      }
    ); /// complete the code using fire base
    //Custom alert "Item added to cart"
}
  const navigateHandler = () => {
    navigate("/womensclothing");
  };
  return (
    <Fragment>
      <Container style={{ marginBottom: "1rem", marginTop: "1rem" }}>
      
        <Row>
          {productsArr.map((item) => (
            <Col key={item.title} xs={12} md={6} lg={3} className={classes.column}>
              <div>
                <h3>{item.title}</h3>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{ height: "200px", width: "200px" }}
                />
                <div>
                  <p>
                    {" "}
                    Price: {item.price} Quantity: {item.amount}
                  </p>
                  <Button
                    onClick={() => btnClickHandler(item)}
                    variant="success"
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="flex justify-center items-center mt-4">
        <span className="mx-2 bg-blue-500 text-white font-bold py-2 px-2 rounded">1</span>
          <button
            onClick={navigateHandler}
            className="ml-2 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded  border-2 border-gray-500"
          >
            Next
          </button>
        </div>
      </Container>
      <ToastContainer theme="colored" />
    </Fragment>
  );
}
