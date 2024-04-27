import React from "react";
import "./style.scss";
import Heading from "../../../components/heading/Heading";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="signUp">
      <Heading page={"Register"} />
      <div className="container">
        <div className="box">
          <div className="signUp__cart">
            <form>
              <div className="userEmails">
                <div className="email">
                  <label>First Name*</label>
                  <input type="text" placeholder="Enter Your First Name" />
                  <label>Email*</label>
                  <input type="email" placeholder="Enter Your email" />
                </div>
                <div className="phoneNumber">
                  <label>Last Name*</label>
                  <input type="text" placeholder="Enter Your Last Name" />
                  <label>Phone Number*</label>
                  <input type="text" placeholder="Enter Your phone number" />
                </div>
              </div>
              <div className="adress">
                <label>Adress*</label>
                <input type="text" placeholder="Address" />
              </div>
            </form>
            <div className="buttons">
              <button>Sign Up</button>
              <Link to={"/login"}>Have an account?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
