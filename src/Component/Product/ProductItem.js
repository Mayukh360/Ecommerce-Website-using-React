import React, { Fragment, useState } from "react";
import { Button, Col, Container, Row, Alert } from "react-bootstrap";
import classes from './Product.module.css'

import {  useNavigate } from "react-router-dom";

const productsArr = [
  {
    title: "Shirt",
    price: 700,
    imageUrl:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    amount: 1,
  },

  {
    title: "Jacket",
    price: 1100,
    imageUrl:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1634645738-200964205-1-stone.jpg?crop=1.00xw:0.785xh;0,0.0443xh&resize=980:*",
    amount: 1,
  },
  {
    title: "Casual Blazer",
    price: 3000,
    imageUrl:
      "https://www.gentlemansgazette.com/wp-content/uploads/2019/02/Suitsupply-Jacket-sleeve-length.jpg",
    amount: 1,
  },
  {
    title: "Sweater",
    price: 1800,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1671135590215-ded219822a44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    amount: 1,
  },
  {
    title: "Grey T-Shirt",
    price: 1200,
    imageUrl:
      "https://www.thegoodtrade.com/wp-content/uploads/2023/01/buck-mason-sustainable-mens-clothing.jpeg",
    amount: 1,
  },
  {
    title: "Blue T-Shirt",
    price: 1500,
    imageUrl:
      "https://i5.walmartimages.com/asr/8d112b31-4585-422e-ab8a-59b8e9d0b817.89b7a5c9bb39eb06546eb34d8ccc10cd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    amount: 1,
  },
  {
    title: "Denim Jeans",
    price: 2500,
    imageUrl:
      "https://i5.walmartimages.com/asr/d4939124-f987-466a-b41e-b0a68ce224a3.6605b5bf152c376d1fc692e2033183a9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    amount: 1,
  },
  {
    title: "Virginia Cavaliers",
    price: 1000,
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a563b5f9-c67c-4496-9775-5ebcf516d48f/virginia-cavaliers-mens-dri-fitreplica-baseball-jersey-nFFccb.png",
    amount: 1,
  },
  
  
];

export default function ProductItem() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const enteredEmail = localStorage.getItem("email");
  const changedemail = enteredEmail.replace("@", "").replace(".", "");

  async function btnClickHandler(item) {
    //  await axios.post(
    //     `https://crudcrud.com/api/58289aeebc5542b9b67da0ff1ce0ab14/${changedemail}`,
    //     item
    //   );
    await fetch(
      `https://e-commerce-2-ad090-default-rtdb.firebaseio.com//user/${changedemail}.json`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      }
    ); /// complete the code using fire base
    //Custom alert "Item added to cart"

    setAlertMessage(`${item.title} added to cart`);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }
  const navigateHandler = () => {
    navigate("/womensclothing");
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
    </Fragment>
  );
}
