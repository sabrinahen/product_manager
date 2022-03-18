import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom"

const DisplayOneProduct = (props) => {

    const [product, setProduct] = useState({});

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then ((res)=> {
                console.log(res);
                console.log(res.data);
                setProduct(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])

    const deleteOneProduct = ()=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/")
            })
            .catch((err)=>{
                console.log(err)
            })
    }


return(
    <div>
        <header>
            <Link to={"/"}><h3>Go Home!</h3></Link>
            <h2>{product.title}</h2>
        </header>
        <h4>Price: ${product.price}</h4>
        <h4>Description: {product.description}</h4>
        <button onClick={deleteOneProduct}>Delete</button>
        <button>
        <Link to={`/products/edit/${product._id}`} >Edit</Link>
        </button>
    </div>
)

}

export default DisplayOneProduct;