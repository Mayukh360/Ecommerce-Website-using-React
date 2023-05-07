import React,{useContext} from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./HeaderCart.module.css";
import CartContext from "../Store/CartContext";
import { Link } from 'react-router-dom';
import AuthContext from "../../store/AuthContext";

export default function HeaderCart(props) {
  const authCtx=useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce(
    (currNumber, item) => currNumber + item.amount,
    0
  );
  const logoutHandler=()=>{
 authCtx.logout();
  }
  return (
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/productitem">Products</Nav.Link>
           <Nav.Link  as={Link} to="/about">About</Nav.Link>
           <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
         {authCtx.isLoggedIn && <Button onClick={logoutHandler} variant="danger">Logout</Button>}
        </Container>
        
      
       
       {authCtx.isLoggedIn && <Button onClick={props.onShow} variant="danger">
          <span className={classes.icon}></span>
          <span>Your Cart</span>
          <span className={classes.badge}>{numberOfCartItems}</span>
        </Button>}
      </Navbar>
    
  );
}
