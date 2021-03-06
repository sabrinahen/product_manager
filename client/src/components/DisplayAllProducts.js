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

    const deleteProduct = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setProduct(product.filter(product => product._id !== idFromBelow))
            })
            .catch((err)=>{
                console.log(err)
            })
    }


    return (
        <div>
            <h2>All Products</h2>
            {
                product.map((product, index)=> (
                    <div key={product._id}>
                        <Link to={`/products/${product._id}`} ><h5>{product.title}</h5></Link>
                        <button onClick={()=>deleteProduct(product._id)}>Delete</button>
                        <button>
                            <Link to={`/products/edit/${product._id}`} >Edit</Link>
                        </button>
                    </div>
                ))
            }
        </div>
    )

}

export default DisplayAllProducts;