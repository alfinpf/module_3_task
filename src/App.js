import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Product1 from "./components/Product1";
import Product2 from "./components/Product2";
import Product3 from "./components/Product3";
import Product4 from "./components/Product4";
import Product5 from "./components/Product5";


function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product1" element={<Product1/>}/>
          <Route path="/product2" element={<Product2/>}/>
          <Route path="/product3" element={<Product3/>}/>
          <Route path="/product4" element={<Product4/>}/>
          <Route path="/product5" element={<Product5/>}/>

        </Routes>
      </Router>

      <Footer/>

    </div>
  );
}

export default App;
