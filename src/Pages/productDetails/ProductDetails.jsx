import React, { useState } from "react";
import "./style.scss";
import productImg from "../../assets/img/productDetailsImg/productImg.png";
import Heading from "../../components/heading/Heading";
import Product from "../../components/product/Product";
import { products } from "../../data/Data.jsx";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice.jsx";
import PopularProduct from "../../components/popularProduct/PopularProduct.jsx";
import ScrollToTop from "react-scroll-to-top";
import { motion } from "framer-motion";
const ProductDetails = () => {
  const { id } = useParams();
  const data = products.find((item) => item.id == id);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    console.log(totalPrice);
    dispatch(addToCart(tempProduct));
  };
  const plusQty = (qty) => {
    setQty(qty + 1);
  };
  const minusQty = (qty) => {
    setQty(qty - 1);
  };
  return (
    <div className="product__details">
      <Heading page={"Product"} />
      <div className="container">
        <div className="product__details_hero">
          <motion.div
            whileInView={{ translateX: ["-30px", 0] }}
            transition={{ duration: 0.75 }}
            className="product__left"
          >
            <img src={data.img} alt="" />
            <div className="product__imgs">
              <span>
                <img src={data.img} alt="" />
              </span>
              <span>
                <img src={data.img} alt="" />
              </span>
              <span>
                <img src={data.img} alt="" />
              </span>
              <span>
                <img src={data.img} alt="" />
              </span>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ translateX: ["30px", 0] }}
            transition={{ duration: 0.75 }}
            className="product__right"
          >
            <h3>{data.name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure
              minus error doloribus saepe natus?
            </p>
            <hr />
            <div className="ratings">
              <span>⭐⭐⭐</span>
              <p>(34 Review)</p>
            </div>
            <div className="product__objects">
              <p>
                <span>Brand </span> : ESTA BETTERU CO
              </p>
              <p>
                <span>Flavour </span> : Super Saver Pack
              </p>
              <p>
                <span>Diet Type </span> : {data.category}
              </p>
              <p>
                <span>Weight</span> : 200 Grams
              </p>
              <p>
                <span>Speciality</span> : Gluten Free, Sugar Free
              </p>
              <p>
                <span>Info</span> : Egg Free, Allergen-Free
              </p>
              <p>
                <span>Items</span> : {qty}
              </p>
            </div>
            <h3 className="product__price">
              <h1>${data.sale_price}</h1>
              <h3>${data.price}</h3>
            </h3>
            <div className="product__buttons">
              <button>{qty}</button>
              <div className="count">
                <button onClick={() => plusQty(qty)}>+</button>
                <button onClick={() => minusQty(qty)}>-</button>
              </div>
              <Link
                to={"/cart"}
                className="add__cart"
                onClick={() => handleAddToCart(data)}
              >
                Add To Cart
              </Link>
              <button>like</button>
            </div>
          </motion.div>
        </div>
        <div className="descriptipn__page">
          <motion.h1
            whileInView={{ translateY: ["-20px", 0] }}
            transition={{ duration: 0.75 }}
          >
            Description
          </motion.h1>
          <motion.p
            whileInView={{ translateX: ["20px", 0] }}
            transition={{ duration: 0.4 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in
            vero sapiente odio, error dolore vero temporibus consequatur, nobis
            veniam odit dignissimos consectetur quae in perferendis
            doloribusdebitis corporis, eaque dicta, repellat amet, illum
            adipisci vel perferendis dolor! Quis vel consequuntur repellat
            distinctio rem. Corrupti ratione alias odio, error dolore temporibus
            consequatur, nobis veniam odit laborum dignissimos consectetur quae
            vero in perferendis provident quis.
          </motion.p>
          <motion.h2
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            Packaging & Delivery
          </motion.h2>
          <hr />
          <motion.p
            whileInView={{ translate: ["20px", 0] }}
            transition={{ duration: 0.8 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in
            vero perferendis dolor! Quis vel consequuntur repellat distinctio
            rem. Corrupti ratione alias odio, error dolore temporibus
            consequatur, nobis veniam odit laborum dignissimos consectetur quae
            vero in perferendis provident quis.
          </motion.p>
        </div>
        <div className="popularProducts">
          <PopularProduct title={"Trending products"} to={12} from={16} />
        </div>
      </div>
      <ScrollToTop smooth />
    </div>
  );
};

export default ProductDetails;
