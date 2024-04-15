import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ForgatPassword from "./pages/Authentication/ForgatPassword";
// import Category from "./Components/Card/Category";
import Category from "./Components/Category/Category";
import logout from "./pages/Authentication/Logout";
import Logout from "./pages/Authentication/Logout";
import ScrollToTop from "./Components/ScrollToTop";
import SubCategoryP from "./Components/Categories/SubCategoryP";
import Knowledge from "./Components/Knowledge-Center/Knowledge";
import PageNotFound from "./pages/NotFound";





function App() {
  
 
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
    
        <Route path="/" element={<Layout />}>
          <Route index exact element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/subcategory/:id" element={<SubCategoryP />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="register" element={<Register />} />
          <Route path="forgatpassword" element={<ForgatPassword />} />
          <Route path="knowledge" element={<Knowledge />} />
          <Route path="*" element={<PageNotFound />} />
        
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
