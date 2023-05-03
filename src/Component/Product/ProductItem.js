import React, { Fragment, useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CartContext from "../Store/CartContext";

const productsArr = [
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
  {
    title: "Shirt",

    price: 100,

    imageUrl: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",

    amount: 1,
  },
];

export default function ProductItem() {
  const CartCtx = useContext(CartContext);
  const btnClickHandler = (item) => {
    CartCtx.addItem({
      id: item.title, // pass the item's id instead of generating a new one
      name: item.title,
      price: item.price,
      image: item.imageUrl,
      amount: Number(item.amount),
    });
  };
  return (
    <Fragment>
      <Container>
        <Row>
          {productsArr.map((item) => (
            <Col key={item.title} xs={12} md={6} lg={3}>
              <div>
                <h3>{item.title}</h3>
                <img src={item.imageUrl} alt={item.title} style={{ height: "200px", width: "200px" }} />
                <div>
                  <p>
                    {" "}
                    Price: {item.price} Quantity: {item.amount}
                  </p>
                  <Button
                    onClick={() => btnClickHandler(item)}
                    variant="primary"
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
