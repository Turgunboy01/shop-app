import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

import PopularProduct from "../../components/popularProduct/PopularProduct";
import { removeItem, updateQuantity } from "../../redux/CartSlice";
import Heading from "../../components/heading/Heading";
import ScrollToTop from "react-scroll-to-top";
const Cart = () => {
  const { data } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };
  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1);
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };
  return (
    <div className="cart">
      <Heading page={"Cart"} />
      <div className="container">
        {data.length == 0 ? (
          <div className="notFound">
            <h3>bascket have not products</h3>
          </div>
        ) : (
          <div className="cart__page">
            <div className="cart__top">
              <h3>Product</h3>
              <h3 className="price">Price</h3>
              <h3>Quantity</h3>
              <h3>Total</h3>
              <h3>Action</h3>
            </div>
            <div className="">
              {data.map((item, index) => (
                <div className="cart__top" key={index}>
                  <h3>
                    <div className="productName">
                      <img src={item.img} alt={item.name} />
                      <p className="product_price"> ${item.price}</p>{" "}
                      {item.name}
                    </div>
                  </h3>
                  <h3 className="price">
                    <div className="cartProduct">${item.sale_price}</div>
                  </h3>
                  <h3>
                    <div className="cartProduct">
                      <button
                        onClick={() => decreaseQty(item.id, item.quantity)}
                        className="count"
                      >
                        -
                      </button>{" "}
                      {item.quantity}{" "}
                      <button
                        onClick={() => increaseQty(item.id, item.quantity)}
                        className="count"
                      >
                        +
                      </button>
                    </div>
                  </h3>
                  <h3>
                    <div className="cartProduct">
                      ${item.totalPrice.toFixed(1)}
                    </div>
                  </h3>
                  <h3>
                    <div className="cartProduct">
                      <button onClick={() => handleRemoveItem(item.id)}>
                        🗑️
                      </button>
                    </div>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="popular">
          <PopularProduct title={"Popular products"} to={5} from={9} />
        </div>
      </div>
      <ScrollToTop smooth />
    </div>
  );
};

export default Cart;
