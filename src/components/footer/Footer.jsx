import React from "react";
import "./style.scss";
import logo_img from "../../assets/img/headerImg/logo.png";
import footer_img1 from "../../assets/img/footerImg/footerimg1.png";
import footer_img2 from "../../assets/img/footerImg/footerimg2.png";
import footer_img3 from "../../assets/img/footerImg/footerimg3.png";
import footer_img4 from "../../assets/img/footerImg/footerimg4.png";
import footer_img5 from "../../assets/img/footerImg/footerimg5.png";
import footer_img6 from "../../assets/img/footerImg/icon1.png";
import footer_img7 from "../../assets/img/footerImg/icon2.png";
import footer_img8 from "../../assets/img/footerImg/icon3.png";
import footer_img9 from "../../assets/img/footerImg/icon4.png";
import footer_img10 from "../../assets/img/footerImg/telegram.png";
import footer_assist from "../../assets/img/footerImg/assistent__img4.png";
import footer_assist2 from "../../assets/img/footerImg/assistent__img6.png";
import footer_assist3 from "../../assets/img/footerImg/assistent__img5.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer__top">
        <img src={footer_assist} alt="" className="assist1" />
        <img src={footer_assist2} alt="" className="assist2" />
        <img src={footer_assist3} alt="" className="assist3" />
        <div className="container">
          <div className="row">
            <div className="footer__box big">
              <img src={logo_img} alt="" className="logo" />
              <span>
                <p>
                  FoodTrove is the biggest market of grocery products. Get your
                  daily needs from our store.
                </p>
                <span>
                  <img src="" alt="" /> <p>example@email.com</p>
                </span>{" "}
                <span>
                  <img src="" alt="" /> <p>+91 123 4567890</p>
                </span>{" "}
                <img src="" alt="" />{" "}
                <p>
                  51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783,
                  USA.
                </p>
              </span>
            </div>
            <div className="footer__box">
              <h3>Company</h3>
              <div className="footer__link">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Support Center</a>
                </li>
              </div>
            </div>
            <div className="footer__box">
              <h3>Category</h3>
              <div className="footer__category">
                <li>
                  <a href="#">Dairy & Bakery</a>
                </li>
                <li>
                  <a href="#">Fruits & Vegetable</a>
                </li>
                <li>
                  <a href="#">Snack & Spice</a>
                </li>
                <li>
                  <a href="#">Juice & Drinks</a>
                </li>
                <li>
                  <a href="#">Chicken & Meat</a>
                </li>
                <li>
                  <a href="#">Fast Food</a>
                </li>
              </div>
            </div>
            <div className="footer__box big contacts">
              <h3>Subscribe Our Newsletter</h3>
              <div className="footer__input">
                <input type="text" placeholder="Search here..." />
                <button>
                  <img src={footer_img10} alt="" />
                </button>
              </div>
              <div className="footer__local">
                <a href="#">
                  <img src={footer_img9} alt="" />
                </a>
                <a href="#">
                  <img src={footer_img6} alt="" />
                </a>
                <a href="#">
                  <img src={footer_img7} alt="" />
                </a>
                <a href="#">
                  <img src={footer_img8} alt="" />
                </a>
              </div>
              <div className="footer__img">
                <img src={footer_img1} alt="" />
                <img src={footer_img2} alt="" />
                <img src={footer_img3} alt="" />
                <img src={footer_img4} alt="" />
                <img src={footer_img5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>
            © 2024 <span>FoodTrove</span>, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
