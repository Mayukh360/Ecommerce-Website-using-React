import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartIcon from "../UI/CartIcon";
import classes from "./HeaderCart.module.css";

export default function HeaderCart() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        <Button variant="danger">
          <span className={classes.icon}></span>
          <span>Your Cart</span>
          <span className={classes.badge}>0</span>
        </Button>{" "}
      </Navbar>
    </>
  );
}
