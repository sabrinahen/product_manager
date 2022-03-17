// import Product from "./components/Product";
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./views/Home";
import DisplayOneProduct from "./components/DisplayOneProduct"

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<DisplayOneProduct />} path="/products/:id" />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
