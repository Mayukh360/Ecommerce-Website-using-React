
import React from "react";
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
 
return (
   
    <Carousel fade >
    <Carousel.Item>
      <img style={{ height: '500px' }}
        className="d-block w-100 "
        src="https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Summer Ready</h3>
        <p>Get ready for summer with our new collection of swimsuits and beachwear! From colorful bikinis to stylish one-piece swimsuits, we have everything you need to hit the beach in style</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{ height: '500px' }}
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1514417034809-c7b296354f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Active Lifestyle</h3>
        <p>Upgrade your wardrobe with our stylish and comfortable activewear. Whether you're hitting the gym or going for a run, our collection of leggings, tops, and sports bras will keep you looking and feeling your best</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{ height: '500px' }}
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1620618802705-79f663a9012a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Accessory Sale</h3>
        <p>
        Don't miss out on our limited time offer: 20% off all accessories! From statement earrings to trendy handbags, we have everything you need to complete your look. Shop now and save big!
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
  );
}
