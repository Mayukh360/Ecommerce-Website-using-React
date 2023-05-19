import React, { Fragment, useState } from "react";
import { Button, Col, Container, Row, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const productsArr = [
  {
    title: "Pink Top",
    price: 100,
    imageUrl:
      "https://lppool.catalogsites.net/lf?source=url[file:MasterSite/HD18/hd18_233_new_2.jpg]&scale=width[767],height[712]&sink=format[jpg],quality[80]",
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
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={prevnavigateHandler}
            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Previous
          </button>
          <span className="mx-2">2</span>
          <button
            onClick={navigateHandler}
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </Container>
    </Fragment>
  );
}
