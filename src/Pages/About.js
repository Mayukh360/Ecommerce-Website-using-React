import React from "react";
import classes from "./About.module.css";

export default function About() {
  return (
    <div className={classes.about}>
      <div className={classes.imageContainer}>
        <img
          src="https://wallpaperaccess.com/full/2593068.jpg"
          alt="About Us"
          className={classes.image}
        />
      </div>
      <div className={classes.content}>
        <p style={{ fontSize: "1.1rem" }}>
          Welcome to our e-commerce website! We are your one-stop destination
          for all your shopping needs. Whether you're looking for trendy and
          stylish men's clothing, fashionable women's clothing, adorable
          kidswear, comfortable shoes, or the latest electronics, we've got you
          covered. Our extensive collection of men's clothing features a wide
          range of styles, from casual wear to formal attire. Discover trendy
          t-shirts, stylish shirts, comfortable jeans, and fashionable
          accessories that will elevate your wardrobe and keep you looking
          sharp. Ladies, get ready to indulge in our fabulous selection of
          women's clothing. From elegant dresses and chic tops to trendy bottoms
          and fashionable accessories, you'll find everything you need to
          express your personal style and stay ahead of the fashion game. For
          the little ones, we have a delightful range of kidswear that combines
          comfort, durability, and style. From adorable baby clothes to trendy
          outfits for older children, dressing your kids has never been this
          fun. Step into style with our collection of shoes. Whether you're
          looking for comfortable sneakers, classy heels, or versatile boots, we
          have the perfect pair to complement any outfit and keep your feet
          happy. In addition to fashion, we also offer the latest electronics to
          keep you connected and entertained. Explore our wide range of
          smartphones, tablets, laptops, smartwatches, and more, all from top
          brands that deliver quality and innovation. At our e-commerce store,
          we prioritize customer satisfaction and strive to provide a seamless
          shopping experience. Our user-friendly website and intuitive
          navigation make it easy for you to find exactly what you're looking
          for. We also offer secure payment options and reliable shipping
          services to ensure your items reach you safely and on time. Thank you
          for choosing our e-commerce website. We are dedicated to bringing you
          the best products, exceptional customer service, and an enjoyable
          shopping experience. Start exploring our collection now and elevate
          your style with just a few clicks!
          
        </p>
      </div>
    </div>
  );
}
