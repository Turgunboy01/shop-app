import React from "react";
import "./style.scss";
import { products } from "../../data/Data";
import Product from "../../components/product/Product.jsx";
import Heading from "../../components/heading/Heading.jsx";
import ScrollToTop from "react-scroll-to-top";
// import Product from "../../components/product/Product";
const Shop = () => {
  console.log(products);
  return (
    <div className="shop">
      <Heading page={"Shop"} />
      <div className="container">
        <div className="row">
          {products.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </div>
      <ScrollToTop smooth />
    </div>
  );
};

export default Shop;
