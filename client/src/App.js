// import Product from "./components/Product";
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route element={<Home/>} path="/" />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
