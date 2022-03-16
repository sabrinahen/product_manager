import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Product = (props)=>{

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")

    // const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setTitle("");
            setPrice("");
            setDescription("");
            // navigate("/")
        })
        .catch((err)=>{
        console.log(err)
        })
    }

    return(
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title: </label>
                    <input value={title} name="title" type="text" onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <br/>
                <div>
                    <label>Price: </label>
                    <input value={price} name="price" type="number" onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <br/>
                <div>
                    <label>Description: </label>
                    <input value={description} name="description" type="text" onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <br/>
                <button>Create Product</button>
            </form>
        </div>
    )




}

export default Product;