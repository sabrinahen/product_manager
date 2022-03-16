import Product from "./components/Product"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Product path="/" />
    </div>
  );
}

export default App;
