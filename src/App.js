import { useState, useContext } from "react";

import HeaderCart from "./Component/Header/HeaderCart";
import ProductItem from "./Component/Product/ProductItem";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Component/Store/CartProvider";
import Heading from "./Component/Header/Heading";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import AuthForm from "./Pages/AuthForm";
import AuthContext from "./store/AuthContext";
import Footer from "./Component/Footer/Footer";
import ProductItem2 from "./Component/Product/ProducItem2";
import ProductItem3 from "./Component/Product/ProductItem3";
import ProductItem4 from "./Component/Product/ProductItem4";
import ProductItem5 from "./Component/Product/ProductItem5";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";

function App() {
  // const Navigate=useNavigate()
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const authCtx = useContext(AuthContext);

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
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {authCtx.isLoggedIn ? (
          <Route path="/productitem" element={<ProductItem />} />
        ) : (
          <Route path="/productitem" element={<AuthForm />} />
        )}
        (<Route path="/login" element={<AuthForm />} />)
        <Route path="/Ecommerce-Website-using-React" element={<Home />} />
        {authCtx.isLoggedIn ? (
          <Route path="/womensclothing" element={<ProductItem2 />} />
        ) : (
          <Route path="/womensclothing" element={<AuthForm />} />
        )}
        {authCtx.isLoggedIn ? (
          <Route path="/kidsclothing" element={<ProductItem3 />} />
        ) : (
          <Route path="/womensclothing" element={<AuthForm />} />
        )}
        {authCtx.isLoggedIn ? (
          <Route path="/shoes" element={<ProductItem4 />} />
        ) : (
          <Route path="/shoes" element={<AuthForm />} />
        )}
        {authCtx.isLoggedIn ? (
          <Route path="/accessories" element={<ProductItem5 />} />
        ) : (
          <Route path="/accessories" element={<AuthForm />} />
        )}
      </Routes>

      <Footer />
     
    </CartProvider>
  );
}

export default App;
