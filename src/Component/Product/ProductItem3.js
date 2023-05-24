import React, { Fragment,useState } from "react";
import { Button, Col, Container, Row,Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classes from './Product.module.css'

const productsArr = [
  
  {
    title: "Spiderman Hoodie",
    price: 999,
    imageUrl:
      "https://www.redwolf.in/image/cache/catalog/sweatshirts/spider-man-logo-hoodie-india-700x700.jpg",
    amount: 1,
  },
  {
    title: "T-Shirt Pack of Three",
    price: 100,
    imageUrl:
      "https://imagescdn.pantaloons.com/img/app/product/7/736575-8227267.jpg",
    amount: 1,
  },
  {
    title: "Blue Denim Dress",
    price: 1900,
    imageUrl:
      "https://imagescdn.pantaloons.com/img/app/product/7/740340-8294647.jpg",
    amount: 1,
  },
  {
    title: "Pink Ghagra Choli ",
    price: 100,
    imageUrl:
      "https://imagescdn.pantaloons.com/img/app/product/7/757966-8655965.jpg",
    amount: 1,
  },
  {
    title: "Blue T-Shirt ",
    price: 1500,
    imageUrl:
      "https://imagescdn.pantaloons.com/img/app/product/7/726813-8058130.jpg",
    amount: 1,
  },
  {
    title: "Peach regular Jumpsuit",
    price: 1000,
    imageUrl:
      "https://imagescdn.pantaloons.com/img/app/product/7/726819-8058155.jpg",
    amount: 1,
  },
  {
    title: "Blue Dress",
    price: 900,
    imageUrl:
      "https://imagescdn.pantaloons.com/img/app/product/7/755655-8630093.jpg",
    amount: 1,
  },
  {
    title: "White Top",
    price: 1100,
    imageUrl:
      "https://imagescdn.pantaloons.com/img/app/product/7/735219-9292768.jpg",
    amount: 1,
  },
  
  
  
];

export default function ProductItem3() {
  const [showAlert, setShowAlert] = useState(false);
   const [alertMessage, setAlertMessage] = useState("");
   const navigate=useNavigate();

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
  const navigateHandler=()=>{
    navigate('/shoes')
  }
  const prevnavigateHandler=()=>{
    navigate('/womensclothing');
  }
  return (
    <Fragment>
      <Container style={{marginBottom:"1rem", marginTop:"1rem"}}>
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
            className="mr-2 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded  border-2 border-gray-500"
          >
            Previous
          </button>
          <span className="mx-2 bg-blue-500 text-white font-bold py-2 px-2 rounded">3</span>
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
