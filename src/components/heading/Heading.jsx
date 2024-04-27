import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const Heading = ({ page }) => {
  const [stick, setStick] = useState(false);

  const toScroll = () => {
    if (window.scrollY >= 60) {
      setStick(true);
    } else {
      setStick(false);
    }
  };
  window.addEventListener("scroll", toScroll);
  return (
    <div className={`heading ${stick ? "stiky" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="heading__left">
            <Link to={`#`}>{page}</Link>
          </div>
          <div className="heading__right">
            <Link to={"/"}>Home</Link> - <Link to={"#"}>{page}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
