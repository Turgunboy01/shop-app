import React, { useState } from "react";
import sale_img1 from "../../assets/img/homePage/home1.png";
import sale_img2 from "../../assets/img/homePage/home2.png";
import sale_img3 from "../../assets/img/homePage/home3.png";
import testiImg from "../../assets/img/homePage/testimonial.png";
import sale1Img from "../../assets/img/homePage/sale1.png";
import great_img1 from "../../assets/img/homePage/great1.png";
import great_img2 from "../../assets/img/homePage/great2.png";
import great_img3 from "../../assets/img/homePage/great3.png";
import topImg from "../../assets/img/homePage/__before.png";
import bottomImg from "../../assets/img/homePage/__after.png";
import newImg1 from "../../assets/img/homePage/new1.png";
import newImg2 from "../../assets/img/homePage/new2.png";
import newImg3 from "../../assets/img/homePage/new3.png";
import services_img1 from "../../assets/img/homePage/services1.png";
import services_img2 from "../../assets/img/homePage/services2.png";
import services_img3 from "../../assets/img/homePage/services3.png";
import services_img4 from "../../assets/img/homePage/services4.png";
import services_img5 from "../../assets/img/homePage/services5.png";
import dayProduct from "../../assets/img/homePage/dayProduct.png";

import "./style.scss";
import PopularProduct from "../../components/popularProduct/PopularProduct";
import { Link } from "react-router-dom";
import { products } from "../../data/Data.jsx";
import { addToCart } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../public/bg-img.png";
import img2 from "../../../public/bg-img2.png";

const Home = () => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const handleAddToCart = (product) => {
    const totalPrice = product.price * qty;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="home">
      <div className="homeBanner">
        <Slider {...settings}>
          <div>
            <div className="homeCarousel">
              <div className="container">
                <div className="row">
                  <div className="">
                    <h3>
                      <span>100%</span> Organic Vegitables
                    </h3>
                    <h1>The best way to stuff your wallet.</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex accusantium eaque fugit!
                    </p>
                    <Link to={"/shop"}>Shop Now</Link>
                  </div>
                  <img src={img1} alt="homeImg" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="homeCarousel2">
              <div className="container">
                <div className="row">
                  <div className="">
                    <h3>
                      <span>100%</span> Organic Vegitables
                    </h3>
                    <h1>The best way to stuff your wallet.</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex accusantium eaque fugit!
                    </p>
                    <Link to={"/shop"}>Shop Now</Link>
                  </div>
                  <img src={img2} alt="homeImg" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <section className="sale1">
        <img src={sale1Img} className="assist" alt="" />
        <div className="container">
          <div className="row">
            <div className="sale_cart">
              <img src={sale_img1} alt="" />
              <div className="cart__content">
                <h3>Healthy Bakery Products</h3>
                <p>
                  <span>30%</span>
                  Off on first order{" "}
                </p>
                <Link to={"/shop"}>shop now</Link>
              </div>
            </div>{" "}
            <div className="sale_cart">
              <img src={sale_img2} alt="" />
              <div className="cart__content">
                <h3>Fresh Snacks & Sweets</h3>
                <p>
                  <span>20%</span> Off on first order
                </p>
                <Link to={"/shop"}>shop now</Link>
              </div>
            </div>{" "}
            <div className="sale_cart">
              <img src={sale_img3} alt="" />
              <div className="cart__content">
                <h3>Fresh & healthy Organic Fruits</h3>
                <p>
                  <span>35%</span>
                  Off on first order
                </p>
                <Link to={"/shop"}>shop now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <img src={testiImg} alt="" className="testiAsist" />
        <div className="container">
          <div className="row">
            <div className="testimonial_cart">
              <h3>Product Packing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="testimonial_cart">
              <h3>24X7 Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="testimonial_cart">
              <h3>Delivery in 5 Days</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <div className="testimonial_cart">
              <h3>Payment Secure</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="popular">
        <div className="container">
          <PopularProduct title={"Popular Products"} to={22} from={26} />
        </div>
      </div>
      <section className="greatPeople">
        <div className="container">
          <div className="title">
            <h1>Great Words From People</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore lacus vel facilisis.
            </p>
          </div>
          <div className="row">
            <div className="great__cart">
              <img src={great_img1} alt="" className="greatImg" />
              <img src={topImg} className="top" alt="" />
              <img src={bottomImg} className="bottom" alt="" />
              <h4 className="skill">Co Founder</h4>
              <h3 className="name">Stephen Smith</h3>
              <p className="desc">
                “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod
                tem lacus vel facilisis.”
              </p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>{" "}
            <div className="great__cart">
              <img src={great_img2} alt="" className="greatImg" />
              <img src={topImg} className="top" alt="" />
              <img src={bottomImg} className="bottom" alt="" />
              <h4 className="skill">Manager</h4>
              <h3 className="name">Lorem Robinson</h3>
              <p className="desc">
                “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod
                tem lacus vel facilisis.”
              </p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>{" "}
            <div className="great__cart">
              <img src={great_img3} alt="" className="greatImg" />
              <img src={topImg} className="top" alt="" />
              <img src={bottomImg} className="bottom" alt="" />
              <h4 className="skill">Team Leader</h4>
              <h3 className="name">Saddika Alard</h3>
              <p className="desc">
                “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod
                tem lacus vel facilisis.”
              </p>
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>
      <section className="new">
        <div className="title">
          <h1>Latest News</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore lacus vel facilisis.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="new__cart">
              <div className="new__cart_content">
                <h3>
                  {" "}
                  <span>By Admin | </span> Snacks
                </h3>
                <p>Urna pretium elit mauris cursus at elit Vestibulum.</p>
                <a href="#">Read More</a>
              </div>
              <img src={newImg2} alt="" />
            </div>
            <div className="new__cart">
              <div className="new__cart_content">
                <h3>
                  {" "}
                  <span>By Admin | </span> Food
                </h3>
                <p>Best guide to Shopping for organic ingredients.</p>
                <a href="#">Read More</a>
              </div>
              <img src={newImg1} alt="" />
            </div>{" "}
            <div className="new__cart">
              <div className="new__cart_content">
                <h3>
                  {" "}
                  <span>By Admin | </span> Snacks
                </h3>
                <p>Cursus at elit vestibulum urna pretium elit mauris.</p>
                <a href="#">Read More</a>
              </div>
              <img src={newImg3} alt="" />
            </div>{" "}
          </div>
        </div>
      </section>
      <div className="dealDay">
        <div className="container">
          <div className="title">
            <h1>Deals Of The Day</h1>
          </div>
          <div className="row">
            {products.slice(9, 12).map((item) => (
              <div className="day__cart">
                <img src={item.img} alt="" />
                <div className="day__content">
                  <h3>{item.name}</h3>
                  <div className="rating">
                    {Array(item.rating).fill(<small>⭐</small>)}
                    <p> ({item.rating})</p>
                  </div>
                  <p>
                    By
                    <span>{item.category}</span>
                  </p>
                  <div className="price">
                    <h3>
                      {" "}
                      {item.sale_price}
                      <span>{item.price}</span>
                    </h3>
                    <Link to={"/cart"} onClick={() => handleAddToCart(item)}>
                      add
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="services">
        <div className="container">
          <div className="row">
            <div className="services__cart">
              <img src={services_img1} alt="" />
              <div className="services__cart_content">
                <h3>Best prices & offers</h3>
                <p>Orders $50 or more</p>
              </div>
            </div>{" "}
            <div className="services__cart">
              <img src={services_img2} alt="" />
              <div className="services__cart_content">
                <h3>Free delivery</h3>
                <p>24/7 amazing services</p>
              </div>
            </div>{" "}
            <div className="services__cart">
              <img src={services_img3} alt="" />
              <div className="services__cart_content">
                <h3>Great daily deal</h3>
                <p>When you sign up</p>
              </div>
            </div>{" "}
            <div className="services__cart">
              <img src={services_img4} alt="" />
              <div className="services__cart_content">
                <h3>Wide assortment</h3>
                <p>Mega Discounts</p>
              </div>
            </div>{" "}
            <div className="services__cart">
              <img src={services_img5} alt="" />
              <div className="services__cart_content">
                <h3>Easy returns</h3>
                <p>Within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop smooth />
    </div>
  );
};

export default Home;
