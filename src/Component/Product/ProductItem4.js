import React, { Fragment,useState } from "react";
import { Button, Col, Container, Row,Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classes from './Product.module.css'

const productsArr = [
  
    {
        title: "Shoes",
        price: 800,
        imageUrl:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5cdbd9c71cd2432db2e7cf989bf6c050_9366/Gazelle_Shoes_Green_IG0671_HM1.jpg",
        amount: 1,
      },
  
  
  
];

export default function ProductItem4() {
  const [showAlert, setShowAlert] = useState(false);
   const [alertMessage, setAlertMessage] = useState("");
   const navigate=useNavigate();

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
  const navigateHandler=()=>{
    navigate('/accessories')
  }
  const prevnavigateHandler=()=>{
    navigate('/kidsclothing')
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
            className="ml-2 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded  border-2 border-gray-500"
          >
            Previous
          </button>
          <span className="mx-2 bg-blue-500 text-white font-bold py-2 px-2 rounded">4</span>
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
