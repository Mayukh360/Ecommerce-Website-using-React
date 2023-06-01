import React, { Fragment, useState } from "react";
import { Button, Col, Container, Row, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classes from "./Product.module.css";
import Dress1 from '../../assets2/dress1.webp'
import Dress2 from '../../assets2/dress2.jpeg'
import Dress3 from '../../assets2/dress3.jpeg'
import Dress4 from '../../assets2/dress4.webp'
import Dress5 from '../../assets2/dress5.webp'
import Dress6 from '../../assets2/dress6.jpeg'
import Dress7 from '../../assets2/dress7.jpg'
import Dress8 from '../../assets2/dress8.webp'

const productsArr = [
  {
    title: "Bridgton Linen Dress",
    price: 1900,
    imageUrl:
     Dress1,
    amount: 1,
  },
  {
    title: "Saskia Dress",
    price: 1900,
    imageUrl:
    Dress2,
    amount: 1,
  },
  {
    title: "Casette Silk Dress",
    price: 2300,
    imageUrl:
    Dress3,
    amount: 1,
  },
  {
    title: "Women Off-Shoulder",
    price: 3000,
    imageUrl:
    Dress4,
    amount: 1,
  },
  {
    title: "Amara Dress",
    price: 3200,
    imageUrl:
    Dress5,
    amount: 1,
  },
  {
    title: "Knit Dress",
    price: 1900,
    imageUrl:
    Dress6,
    amount: 1,
  },
  {
    title: "Leather Jacket",
    price: 2700,
    imageUrl:
    Dress7,
    amount: 1,
  },
  {
    title: "Tanis Dress",
    price: 2900,
    imageUrl:
    Dress8,
    amount: 1,
  },
];

export default function ProductItem2() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

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
  const navigateHandler = () => {
    navigate("/kidsclothing");
  };
  const prevnavigateHandler = () => {
    navigate("/productitem");
  };
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
            <Col
              key={item.title}
              xs={12}
              md={6}
              lg={3}
              className={classes.column}
            >
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
            className="mr-2 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded  border-2 border-gray-500"
          >
            Previous
          </button>
          <span className="mx-2 bg-blue-500 text-white font-bold py-2 px-2 rounded">
            2
          </span>
          <button
            onClick={navigateHandler}
            className="ml-2 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded  border-2 border-gray-500"
          >
            Next
          </button>
        </div>
      </Container>
    </Fragment>
  );
}
