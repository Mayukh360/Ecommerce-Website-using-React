import React, { Fragment, useState } from "react";
import { Button, Col, Container, Row, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const productsArr = [
  {
    title: "Smart Watch",
    price: 800,
    imageUrl:
      "https://www.mivi.in/cdn-cgi/image/width=2000,f=auto,quality=90/assets/model-e/black.png",
    amount: 1,
  },
  {
    title: "Mobile",
    price: 48000,
    imageUrl:
      "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1",
    amount: 1,
  },
];

export default function ProductItem5() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
 

  const enteredEmail = localStorage.getItem("email");
  const changedemail = enteredEmail.replace("@", "").replace(".", "");

  async function btnClickHandler(item) {
    await axios.post(
      `https://crudcrud.com/api/58289aeebc5542b9b67da0ff1ce0ab14/${changedemail}`,
      item
    );
    //Custom alert "Item added to cart"

    setAlertMessage(`${item.title} added to cart`);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
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
            <Col key={item.title} xs={12} md={6} lg={3}>
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
        <span>5</span>
      </Container>
    </Fragment>
  );
}
