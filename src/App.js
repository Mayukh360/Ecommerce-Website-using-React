import { useState,useContext } from "react";

import HeaderCart from "./Component/Header/HeaderCart";
import ProductItem from "./Component/Product/ProductItem";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Component/Store/CartProvider";
import Heading from "./Component/Header/Heading";
import { Routes, Route } from "react-router-dom";
// import RenderPage from './Render/RenderPage';
import About from "./Pages/About";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import AuthForm from "./Pages/AuthForm";
import AuthContext from "./store/AuthContext";

function App() {
  // const Navigate=useNavigate()
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const authCtx=useContext(AuthContext);
 
  const showCartHandler = () => {
    setCartIsVisible(true);
  };
  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartProvider>
      {cartIsVisible && <Cart onHide={hideCartHandler} />}
      <HeaderCart onShow={showCartHandler} />
      <Heading />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       {authCtx.isLoggedIn ?  <Route path="/productitem" element={<ProductItem />} /> : <Route path="/productitem" element={<AuthForm />} />}

        (<Route path="/login" element={<AuthForm />} />) 
        <Route path="/" element={<Home />} />
       
     
      </Routes>
     
      
    </CartProvider>
  );
}

export default App;
