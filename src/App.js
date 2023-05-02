import {useState } from 'react';

import HeaderCart from './Component/Header/HeaderCart';
import ProductItem from './Component/Product/ProductItem';
import Cart from './Component/Cart/Cart';
import CartProvider from './Component/Store/CartProvider';

function App() {
  const[cartIsVisible, setCartIsVisible]=useState(false);

  const showCartHandler=()=>{
    setCartIsVisible(true);
  }
  const hideCartHandler=()=>{
    setCartIsVisible(false);
  }
  return (
    <CartProvider>
      {cartIsVisible && <Cart onHide={hideCartHandler}/>}
      <HeaderCart onShow={showCartHandler}/>
    <ProductItem/>
    </CartProvider>
  );
}


export default App;
