import axios from "axios";
import React,{useEffect,useContext} from "react";
import Carousel from 'react-bootstrap/Carousel';
import CartContext from "../Component/Store/CartContext";

export default function Home() {
  const cartCtx=useContext(CartContext);
  
  const enteredEmail=localStorage.getItem('email');
  const changedEmail=enteredEmail.replace("@","").replace(".","");
  // useEffect(()=>{
   
  //   const enteredEmail=localStorage.getItem('email');
  //   const changedEmail=enteredEmail.replace("@","").replace(".","");
  //   async function fetchData() {
    
  //   const response = await axios.get( `https://crudcrud.com/api/518cf2a72a7543b4a28274a9bc10dc81/${changedEmail}`)
  //   // console.log(response.data);
  //   const productList = response.data.map((item) => {
  //           return {
  //             id: item._id,
  //             name: item.title,
  //             price: Number(item.price),
  //             image: item.imageUrl,
  //             amount: item.amount,
  //           };
  //         });
          
  //   productList.forEach((item) => {
  //     cartCtx.addItem({
  //       id: item.id, 
  //       name: item.name,
  //       price: item.price,
  //       image: item.image,
  //       amount: Number(item.amount),
  //     });
  //   });
  //   console.log('I am executed');
  //   }
  //   fetchData();
  // },[])

  async function fetechDataHandler(){
    const response = await axios.get( `https://crudcrud.com/api/c428d361399e443c8e32aa74e99894b4/${changedEmail}`)
    // console.log(response.data);
    const productList = response.data.map((item) => {
            return {
              id: item._id,
              name: item.title,
              price: Number(item.price),
              image: item.imageUrl,
              amount: item.amount,
            };
          });
          
    productList.forEach((item) => {
      cartCtx.addItem({
        id: item.name, 
        name: item.name,
        price: item.price,
        image: item.image,
        amount: Number(item.amount),
      });
    });
  }

  return (
    <>
    <button onClick={fetechDataHandler}>Fetch Data</button>
    <Carousel fade >
    <Carousel.Item>
      <img style={{ height: '700px' }}
        className="d-block w-100 "
        src="https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{ height: '700px' }}
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1514417034809-c7b296354f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{ height: '700px' }}
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1620618802705-79f663a9012a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </>
  );
}
