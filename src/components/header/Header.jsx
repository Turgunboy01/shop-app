import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaClosedCaptioning, FaSearch } from "react-icons/fa";
import "./style.scss";
import { useSelector } from "react-redux";
import logo_img from "../../assets/img/headerImg/logo.png";
// import wish_img from "../../assets/img/headerImg/wish.png";
import cart_img from "../../assets/img/headerImg/cart.png";
import acc_img from "../../assets/img/headerImg/Vector.png";
import phone_number from "../../assets/img/headerImg/phone.png";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const { data } = useSelector((state) => state.cart);
  const [mobile, setMobile] = useState(false);

  return (
    <header>
      <div className={`header__top ${mobile ? "mobile" : ""}`}>
        <div className="container">
          <ul className={`nav__links `}>
            <li className="close" onClick={() => setMobile(false)}>
              <IoMdClose />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
          <h4 className="phone__numbers">
            <img src={phone_number} alt="" />
            +123 ( 456 ) ( 7890 )
          </h4>
        </div>
      </div>
      <div id="sticky-header" className={`navbar header__bottom `}>
        <div className="container">
          <Link to={"/"}>
            <img src={logo_img} alt="" />
          </Link>
          <div className="search__div">
            <input type="text" placeholder="Search For items..." />
            <button>
              <FaSearch  />
            </button>
          </div>
          <div className="header__bottom_buttons">
            <Link to={"/login"}>
              <img src={acc_img} alt="" />
              <p>Account</p>
            </Link>
            <Link to={"/cart"}>
              <img src={cart_img} alt="" /> <p>Cart</p>
              <span>{data.length}</span>
            </Link>
            <button className="mobile" onClick={() => setMobile(!mobile)}>
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
