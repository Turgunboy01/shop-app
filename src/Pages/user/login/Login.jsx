import React from "react";
import Heading from "../../../components/heading/Heading";
import { Link } from "react-router-dom";
import "./style.scss";
import logo from "../../../assets/img/headerImg/logo.png";

const Login = () => {
  return (
    <div className="login">
      <Heading page={"Login"} />

      <div className="container">
        <div className="box">
          <div className="login_cart">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <form>
              <label>Email:</label>
              <input placeholder="Enter Your Email" type="email" />
              <label>Password:</label>
              <input type="password" placeholder="Enter Your password" />
            </form>
            <div className="login__links">
              <div className="check__box">
                <input type="checkbox" />
                Remember Me
              </div>
              <div className="link">
                <Link>Forgot Password?</Link>
              </div>
            </div>
            <div className="login__buttons">
              <button>Login</button>
              <Link to={`/sign`}>Sign Up?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
