import React, { Fragment,useState } from "react";
import { Button, Col, Container, Row,Toast,Alert } from "react-bootstrap";
import axios from "axios";


const productsArr = [
  
  {
    title: "Shirt",
    price: 100,
    imageUrl:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    amount: 1,
  },
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
  {
    title: "Shoes",
    price: 800,
    imageUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5cdbd9c71cd2432db2e7cf989bf6c050_9366/Gazelle_Shoes_Green_IG0671_HM1.jpg",
    amount: 1,
  },
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    amount: 1,
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    amount: 1,
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    amount: 1,
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    amount: 1,
  },
  
];

export default function ProductItem() {
  const [showAlert, setShowAlert] = useState(false);
   const [alertMessage, setAlertMessage] = useState("");

  const enteredEmail = localStorage.getItem("email");
  const changedemail = enteredEmail.replace("@", "").replace(".", "");

  async function btnClickHandler(item) {

   await axios.post(
      `https://crudcrud.com/api/34973572ec854db9a61f8e68aa171895/${changedemail}`,
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
      <Container style={{marginBottom:"1rem", marginTop:"1rem"}}>
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
      
      </Container>
     
    </Fragment>
  );
}
