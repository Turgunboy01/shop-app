import React, { useState } from "react";
import Heading from "../../components/heading/Heading";
import "./style.scss";
import faq_img from "../../assets/img/aboutImg/aboutImg.png";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <h3>
        {header} <span className={"chevron-down"}>{">"}</span>
      </h3>
    }
  />
);

const FAQ = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="faq">
      <Heading page={"FAQ"} />
      <div className="faq_content">
        <div className="container">
          <div className="row">
            <div className="content__left">
              <img src={faq_img} alt="" />
            </div>
            <div className="content__right">
              <Accordion transition transitionTimeout={250}>
                <AccordionItem
                  className="accordion"
                  header=" What Facilities Does Your Hotel Have? "
                  initialEntered
                >
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    voluptate doloribus eos sunt labore ea enim voluptatem,
                    sequi voluptas rem doloremque architecto. Libero, vero
                    natus.
                  </p>
                </AccordionItem>
                <AccordionItem
                  className="accordion"
                  header=" How Do I Book A Room For My Vacation? "
                  initialEntered
                >
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    voluptate doloribus eos sunt labore ea enim voluptatem,
                    sequi voluptas rem doloremque architecto. Libero, vero
                    natus.
                  </p>
                </AccordionItem>{" "}
                <AccordionItem
                  header="How We are best among others?  "
                  initialEntered
                  className="accordion"
                >
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    voluptate doloribus eos sunt labore ea enim voluptatem,
                    sequi voluptas rem doloremque architecto. Libero, vero
                    natus.
                  </p>
                </AccordionItem>{" "}
                <AccordionItem
                  className="accordion"
                  header="  Is There Any Fitness Center In Your Hotel? "
                  initialEntered
                >
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    voluptate doloribus eos sunt labore ea enim voluptatem,
                    sequi voluptas rem doloremque architecto. Libero, vero
                    natus.
                  </p>
                </AccordionItem>{" "}
                <AccordionItem
                  className="accordion"
                  header=" How Do I Book A Room For My Vacation? "
                  initialEntered
                >
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    voluptate doloribus eos sunt labore ea enim voluptatem,
                    sequi voluptas rem doloremque architecto. Libero, vero
                    natus.
                  </p>
                </AccordionItem>
                <AccordionItem
                  header="What Type Of Room Service Do You Offer? "
                  initialEntered
                  className="accordion"
                >
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    voluptate doloribus eos sunt labore ea enim voluptatem,
                    sequi voluptas rem doloremque architecto. Libero, vero
                    natus.
                  </p>
                </AccordionItem>{" "}
                <AccordionItem
                  header=" What Facilities Does Your Hotel Have? "
                  initialEntered
                  className="accordion"
                >
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    voluptate doloribus eos sunt labore ea enim voluptatem,
                    sequi voluptas rem doloremque architecto. Libero, vero
                    natus.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
