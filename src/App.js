import { useState } from "react";

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

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
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
        <Route path="/productitem" element={<ProductItem />} />
        <Route path="/" element={<Home />} />
      </Routes>
      
      
    </CartProvider>
  );
}

export default App;
