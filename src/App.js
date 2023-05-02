import { Fragment,useState } from 'react';

import HeaderCart from './Component/Header/HeaderCart';
import ProductItem from './Component/Product/ProductItem';
import Cart from './Component/Cart/Cart';

function App() {
  const[cartIsVisible, setCartIsVisible]=useState(false);

  const showCartHandler=()=>{
    setCartIsVisible(true);
  }
  const hideCartHandler=()=>{
    setCartIsVisible(false);
  }
  return (
    <Fragment >
      {cartIsVisible && <Cart onHide={hideCartHandler}/>}
      <HeaderCart onShow={showCartHandler}/>
    <ProductItem/>
    </Fragment>
  );
}


export default App;
