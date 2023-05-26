import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./HeaderCart.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

import { FaShoppingCart } from "react-icons/fa";

export default function HeaderCart(props) {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <Navbar
      variant="dark"
      style={{
        background:
          "linear-gradient(to right, rgb(113, 4, 113), rgb(40, 38, 38))",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/Ecommerce-Website-using-React">
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/productitem">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact Us
          </Nav.Link>
        </Nav>
        {authCtx.isLoggedIn && (
          <Button onClick={logoutHandler} variant="danger">
            <span className={classes.cartText}>Logout</span>
          </Button>
        )}
      </Container>

      {authCtx.isLoggedIn && (
        <Button
          style={{ marginRight: "20px" }}
          onClick={props.onShow}
          variant="danger"
        >
          <div className={classes.cartButton}>
            <FaShoppingCart className={classes.cartIcon} /> {/* Add the icon */}
            <span className={classes.cartText}>Your Cart</span>
          </div>
        </Button>
      )}
    </Navbar>
  );
}
