import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditProduct = (props)=>{

    const [product, setProduct] = useState({});

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then ((res)=> {
                console.log(res);
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setProduct(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
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
                <button>Update Product</button>
            </form>
        </div>
    )




}

export default EditProduct;