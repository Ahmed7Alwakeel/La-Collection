import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addCart } from "../../store/action/cart";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./product.scss"


const Details = () => {

    const [data, setData] = useState([{}])
    const cart = useSelector(state => state.cart)
    const params = useParams()
    const [loading, setLoading] = useState(false)
    
    const dispatch=useDispatch()
    const addProduct=(data)=>{
        dispatch(addCart(data))
       
        // console.log(localStorage.getItem("users").length)
        
       
    }
    // onRegisterSubmit(){
    //     const user = {
    //         a: this.a,
    //         b: this.b,
    //         c: this.c,
    //       id: Date.now()
    //     }    
    
    //    var abc = [];
    //    var get =  JSON.parse(localStorage.getItem('user'));
    //    abc = [get];
    //    abc.push(user);
    
    //    localStorage.setItem('user', JSON.stringify(abc));
    
    //    console.log(JSON.stringify(abc));
    //    console.log(get);
    //   }

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const resp = await fetch(`https://fakestoreapi.com/products/${params.id}`)
                setData(await resp.json())
                setLoading(false)
   
            // axios.
            // get(`https://fakestoreapi.com/products/${params.id}`)
            // .then(res=>setData(res.data))
            // setLoading(false)
        }
        getProducts()

    }, [])

    const Loading = () => {
        return (
            <>
                <div className="d-flex justify-content-center spinner" >
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-4 col-4">
                    <div className="card mt-4">
                        <img className="mt-0" src={`${data.image}`} />
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-md-7 col-6 mt-5">
                    <h4 className="text-secondary text-uppercase ms-5 fw-bold mb-3">{data.category}</h4>
                    <h3 className="ms-5 mb-3 lead fw-bold fs-1">{data.title}</h3>
                    <h6 className="ms-5 fw-bold mb-4">
                    Rating {data.rating && data.rating.rate} <i className="fa fa-star fs-4"></i></h6>
                    <h2 className="ms-5 fw-bold">$ {data.price}</h2>
                    <p className="lead ms-5 text-secondary w-75 mb-2">
                    {data.description}
                    </p>
                    <button className="btn btn-outline-dark ms-5 mt-2 mb-2"  onClick={()=>{addProduct(data)}}>Add To Cart</button>
                    <button className="btn btn-outline-dark ms-5 mt-2 mb-2" to="/cart">Go To Cart</button>
                </div>

            </>
        )
    }
    return (
        <>

            <div className="container mt-3">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}

                </div>
            </div>

        </>
    )
}

export default Details;