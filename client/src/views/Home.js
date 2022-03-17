import React, {useState} from "react";
import Product from "../components/Product";
import DisplayAllProducts from "../components/DisplayAllProducts";

const Home = (props)=> {
    
    const [product, setProduct] = useState([]);



    return(
        <div>
            <Product product={product} setProduct={setProduct} />
            <DisplayAllProducts product={product} setProduct={setProduct} />
        </div>
    )
}

export default Home;
