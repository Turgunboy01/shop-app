import React from "react";
import "./style.scss";
import popular_img from "../../assets/img/homePage/dayProduct.png";
import { products } from "../../data/Data.jsx";
import Product from "../product/Product.jsx";

const PopularProduct = ({ title, to, from }) => {
  return (
    <>
      <div className="popular_title" key={to}>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et viverra maecenas accumsan lacus
          vel facilisis.
        </p>
      </div>
      <div className="products">
        {products.slice(to, from).map((item) => (
          <Product item={item} key={to} />
        ))}
      </div>
    </>
  );
};

export default PopularProduct;
