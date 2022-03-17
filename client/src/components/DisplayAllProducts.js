import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"

const DisplayAllProducts = (props)=> {

    // const [productList, setProductList] = useState([]);

    const {product, setProduct} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])


    return (
        <div>
            <h2>All Products</h2>
            {
                product.map((product, index)=> (
                    <div key={product._id}>
                        <Link to={`/products/${product._id}`} ><h5>{product.title}</h5></Link>
                    </div>
                ))
            }
        </div>
    )

}

export default DisplayAllProducts;