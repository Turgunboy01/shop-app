import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Cart from "./Pages/cart/Cart";
import Home from "./Pages/Home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./Pages/About/About";
import FAQ from "./Pages/Faq/FAQ";
import Blog from "./Pages/Blog/Blog";
import ProductDetails from "./Pages/productDetails/ProductDetails";
import Shop from "./Pages/shop/Shop";
import Login from "./Pages/user/login/Login";
import SignIn from "./Pages/user/sing in/SignIn";
import ScrollToTop from "./components/SrollToTop.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<SignIn />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default App;
