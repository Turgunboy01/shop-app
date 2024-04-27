import Heading from "../../components/heading/Heading";
import "./style.scss";
import blogImg from "../../assets/img/blogImg/blog1.png";
import message from "../../assets/img/blogImg/msg.png";
import footer_img6 from "../../assets/img/footerImg/icon1.png";
import footer_img7 from "../../assets/img/footerImg/icon2.png";
import footer_img8 from "../../assets/img/footerImg/icon3.png";
import footer_img9 from "../../assets/img/footerImg/icon4.png";
import blogImg2 from "../../assets/img/blogImg/blog2.png";
import blogImg3 from "../../assets/img/blogImg/blog3.png";
import rightArrow from "../../assets/img/blogImg/right.png";
import ScrollToTop from "react-scroll-to-top";
import { motion } from "framer-motion";
const Blog = () => {
  return (
    <div className="blog">
      <Heading page={"Blogs"} />
      <div className="container">
        <div className="blog_content">
          <motion.img src={blogImg} alt="" />
          <div className="data">
            <h3>
              <span>By Admin</span> / 07 Comment / Date - 09 ,09 ,2024
            </h3>
            <h1>Health Benefits of a Row food</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              mollitia nihil sunt reprehenderit natus, soluta officia iure enim
              itaque. Iste qui exercitationem et odit beatae debitis ratione
              molestiae quis atque.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              doloribus dolor odio nobis eum voluptatem laudantium magni
              veritatis sint! Aspernatur est quisquam modi laudantium. Assumenda
              neque vitae corrupti asperiores, quos vel aliquid hic nisi nostrum
              repellendus dolorem placeat vero odit.
            </p>
            <div className="blog__box">
              <motion.div className="blog__box_card">
                <img src={blogImg2} className="cart__img" alt="" />
                <div className="cart__content">
                  <h3>
                    <img src={rightArrow} alt="arrow" /> Lorem ipsum dolor
                    consectetur adipisicing elit. Molestias, dolorum!
                  </h3>
                </div>
              </motion.div>
              <motion.div className="blog__box_card">
                <img src={blogImg3} className="cart__img" alt="" />
                <div className="cart__content">
                  <h3>
                    <img src={rightArrow} alt="arrow" /> Lorem ipsum dolor
                    consectetur adipisicing elit. Molestias, dolorum!
                  </h3>
                </div>
              </motion.div>
            </div>

            <div className="message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                repellat earum architecto odit soluta quas odio distinctio quae
                numquam? Quaerat nulla blanditiis possimus quae. Iusto
                doloribus, est aliquam delectus pariatur voluptatem cum iste
                exercitationem rem.
              </p>
              <h3>
                John martin
                <button>
                  <img src={message} alt="" />
                </button>
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores officia magni explicabo fuga molestiae architecto ipsa
              excepturi laudantium molestias, assumenda vel fugiat hic
              exercitationem. Necessitatibus itaque et id! Ratione accusantium
              voluptatum optio rerum facilis expedita.
            </p>
          </div>
        </div>
        <div className="hashtags">
          <div className="buttons">
            <button>Cabbage</button>
            <button>Appetizer</button>
            <button>Meat Food</button>
          </div>
          <div className="local">
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
        </div>
      </div>
      <ScrollToTop smooth />
    </div>
  );
};

export default Blog;
