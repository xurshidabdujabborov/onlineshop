import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import axios from "axios";
import { Context } from "./Context/Context";
import ProductAbout from "./Pages/ProductAbout/ProductAbout";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import About from "./Components/About/About";
// import Header from "./Components/Header/Header";

function App() {
  const [data, setDate] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://fakestoreapi.com/products")
        .then((data) => setDate(data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="App">
      <Context.Provider value={{ data }}>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/User" element={<User />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProductAbout/:id" element={<ProductAbout />} />
          <Route path="*" element={<h2>Bunaqa sahifa yoq afsus!!!</h2>} />
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
