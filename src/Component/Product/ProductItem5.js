import React, { Fragment, useState } from "react";
import { Button, Col, Container, Row, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classes from './Product.module.css'

const productsArr = [
  {
    title: "Boat Smart Watch",
    price: 800,
    imageUrl:
      "https://www.mivi.in/cdn-cgi/image/width=2000,f=auto,quality=90/assets/model-e/black.png",
    amount: 1,
  },
  {
    title: "I-Phone",
    price: 48000,
    imageUrl:
      "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1",
    amount: 1,
  },
  {
    title: "Samsung S-23 Ultra",
    price: 90000,
    imageUrl:
      "https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg",
    amount: 1,
  },
  {
    title: "Samsung Z-Flip",
    price: 78000,
    imageUrl:
      "https://m.media-amazon.com/images/I/71MmJNwZcML._SX679_.jpg",
    amount: 1,
  },
  {
    title: "Oneplus 11",
    price: 61000,
    imageUrl:
      "https://m.media-amazon.com/images/I/61amb0CfMGL._SX679_.jpg",
    amount: 1,
  },
  {
    title: "Apple Smart Watch",
    price: 33000,
    imageUrl:
      "https://m.media-amazon.com/images/I/71LfnkRgZ4L._SX679_.jpg",
    amount: 1,
  },
  {
    title: "Hp Laptop",
    price: 56000,
    imageUrl:
      "https://m.media-amazon.com/images/I/81koa5VFokL._SX679_.jpg",
    amount: 1,
  },
  {
    title: "Zebronics Keyboard",
    price: 999,
    imageUrl:
      "https://m.media-amazon.com/images/I/71fWGZ2GOOL._SX679_.jpg",
    amount: 1,
  },
];

export default function ProductItem5() {
  const navigate=useNavigate()
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
 

  const enteredEmail = localStorage.getItem("email");
  const changedemail = enteredEmail.replace("@", "").replace(".", "");

  async function btnClickHandler(item) {
    await axios.post(
      `https://e-commerce-2-ad090-default-rtdb.firebaseio.com//user/${changedemail}.json`,
      item
    );
    //Custom alert "Item added to cart"

    setAlertMessage(`${item.title} added to cart`);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }
  const prevnavigateHandler=()=>{
  navigate('/shoes');
  }

  return (
    <Fragment>
      <Container style={{ marginBottom: "1rem", marginTop: "1rem" }}>
        {showAlert && (
          <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
            {alertMessage}
          </Alert>
        )}
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
          <button
            onClick={prevnavigateHandler}
            className="ml-2 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded  border-2 border-gray-500"
          >
            Previous
          </button>
          <span className="mx-2 bg-blue-500 text-white font-bold py-2 px-2 rounded">5</span>
        
        </div>
      </Container>
    </Fragment>
  );
}
