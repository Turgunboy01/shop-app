import React from "react";
import Heading from "../../components/heading/Heading";
import about__img from "../../assets/img/aboutImg/aboutImg.png";
import "./style.scss";
import ScrollToTop from "react-scroll-to-top";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="about">
      <Heading page={"About"} />
      <div className="about__contents">
        <div className="container">
          <div className="row">
            <motion.div
              whileInView={{ translateX: ["-30px", 0] }}
              transition={{ duration: 0.75 }}
              className="content__left"
            >
              <h2>About The Carrot</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione, recusandae necessitatibus quasi incidunt alias adipisci
                pariatur earum iure beatae assumenda rerum quod. Tempora magni
                autem a voluptatibus neque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vitae rerum cum accusamus magni consequuntur architecto, ipsum
                deleniti expedita doloribus suscipit voluptatum eius perferendis
                amet!.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, maxime amet architecto est exercitationem optio ea
                maiores corporis beatae, dolores doloribus libero nesciunt qui
                illum? Voluptates deserunt adipisci voluptatem magni sunt sed
                blanditiis quod aspernatur! Iusto?
              </p>
              <div className="static">
                <div className="static__box">
                  <h3>
                    <span>0.1</span>k
                  </h3>
                  <p>Vendors</p>
                </div>
                <div className="static__box">
                  <h3>
                    <span>23</span>k
                  </h3>
                  <p>Customers</p>
                </div>{" "}
                <div className="static__box">
                  <h3>
                    <span>2</span>k
                  </h3>
                  <p>Products</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ translateX: ["30px", 0] }}
              transition={{ duration: 0.75 }}
              className="content__right"
            >
              <img src={about__img} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="testimonials">
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
      </div>
      <ScrollToTop smooth />
    </div>
  );
};

export default About;
