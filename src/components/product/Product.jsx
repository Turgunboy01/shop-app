import React, { useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice.jsx";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Product = ({ item }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
  };
  return (
    <Link to={`/product/${item.id}`} className="product" key={item.id}>
      <div className="product__img">
        <img src={item.img} alt={item.title} />
        <Link
          to={"/cart"}
          className="cart"
          onClick={() => handleAddToCart(item)}
        >
          <FaStore />
        </Link>
      </div>
      <div className="product_content">
        <div className="rating">
          {Array(item.rating).fill(<small key={item.rating}>⭐</small>)}{" "}
          <p> ({item.rating})</p>
        </div>
        <motion.h3
          whileInView={{ translateX: ["-20px", 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
        >
          {item.name}
        </motion.h3>
        <div className="price">
          <motion.h3
            whileInView={{ translateX: ["-10px", 0], opacity: [0, 1] }}
            transition={{ duration: 0.75 }}
          >
            ${item.sale_price}{" "}
          </motion.h3>
          <motion.h4
            whileInView={{ translateX: ["10px", 0], opacity: [0, 1] }}
            transition={{ duration: 0.75 }}
          >
            ${item.price}
          </motion.h4>
        </div>
      </div>
    </Link>
  );
};

export default Product;
