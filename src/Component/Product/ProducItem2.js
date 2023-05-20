import React, { Fragment, useState } from "react";
import { Button, Col, Container, Row, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classes from './Product.module.css'

const productsArr = [
  {
    title: "Bridgton Linen Dress",
    price: 1900,
    imageUrl:
      "https://media.thereformation.com/image/upload/f_auto,q_auto,dpr_2.0/w_600,c_scale//PRD-SFCC/1310246/WHITE/1310246.1.WHITE?_s=RAABAB0",
    amount: 1,
  },
  {
    title: "Saskia Dress",
    price: 1900,
    imageUrl:
      "https://media.thereformation.com/image/upload/f_auto,q_auto,dpr_2.0/w_600,c_scale//PRD-SFCC/1307914/AMARO/1307914.1.AMARO?_s=RAABAB0",
    amount: 1,
  },
  {
    title: "Casette Silk Dress",
    price: 2300,
    imageUrl:
      "https://media.thereformation.com/image/upload/f_auto,q_auto,dpr_2.0/w_600,c_scale//PRD-SFCC/1311240/AURA/1311240.2.AURA?_s=RAABAB0",
    amount: 1,
  },
  {
    title: "Women Off-Shoulder",
    price: 3000,
    imageUrl:
      "https://m.media-amazon.com/images/I/71JRq9JiDHL._UY741_.jpg",
    amount: 1,
  },
  {
    title: "Amara Dress",
    price: 3200,
    imageUrl:
      "https://media.thereformation.com/image/upload/f_auto,q_auto,dpr_2.0/w_600,c_scale//PRD-SFCC/1312724/TRIBUNE_STRIPE/1312724.1.TRIBUNE_STRIPE?_s=RAABAB0",
    amount: 1,
  },
  {
    title: "Knit Dress",
    price: 1900,
    imageUrl:
      "https://media.thereformation.com/image/list/fn_select:jq:first(.%5B%5D%7Cif%20has(%22metadata%22)%20then%20select(any(.metadata%5B%5D;%20.external_id%20==%20%22sfcc-gallery-position%22%20and%20.value%20==%202))%20else%20empty%20end)/f_auto,q_auto,dpr_2.0/w_600,c_scale/1313077-SSG.json?_s=RAABAB0",
    amount: 1,
  },
  {
    title: "Leather Jacket",
    price: 2700,
    imageUrl:
      "https://burst.shopifycdn.com/photos/model-with-leather-jacket-over-shoulders.jpg?width=1200&format=pjpg&exif=1&iptc=1",
    amount: 1,
  },
  {
    title: "Tanis Dress",
    price: 2900,
    imageUrl:
      "https://media.thereformation.com/image/upload/f_auto,q_auto,dpr_2.0/w_600,c_scale//PRD-SFCC/1313082/CITRON/1313082.1.CITRON?_s=RAABAB0",
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
        <Row >
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
          <span className="mx-2 bg-blue-500 text-white font-bold py-2 px-2 rounded">2</span>
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
