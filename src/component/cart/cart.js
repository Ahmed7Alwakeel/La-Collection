import React, { useEffect, useState } from "react";
import { delCart, addCart } from "../../store/action/cart";
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss"

const Cart = () => {
    const [sum,setSum]=useState(0)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    
    const handleQuantityMinus = (cart) => {

        dispatch(delCart(cart))
    }
    const handleQuantityPlus = (cart) => {
        dispatch(addCart(cart))
    }
    
  
   
    return (
        <>

            <div className="container">
                {cart.length ?
                    cart.map(product => {
                        return (
                            <div className="row cart-row mb-5 mt-2" key={product.id}>
                                <div className="col-md-5 mt-5 mb-5 ms-5">
                                    <img src={product.image} heigth="10px" width="300px" />
                                </div>
                                <div className="col-md-4 mt-5 mb-5">
                                    <h3 className="text-secondary">{product.title}</h3>
                                    <p className="lead fw-bold">
                                        Quantity: {product.quantity}
                                    </p>
                                    <p className="lead fw-bold">
                                        Price: $ {product.price}
                                    </p>
                                    <p className="lead fw-bold">
                                        Total Price: $ {product.price * product.quantity}
                                    </p>
                                    <button className="btn btn-outline-dark me-4 mt-2"
                                        onClick={() => { handleQuantityPlus(product) }}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                    <button className="btn btn-outline-dark me-4"
                                        onClick={() => { handleQuantityMinus(product) }}>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                
                            </div>
                            
                           
                            
                        )
                    }):
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="mt-5 mb-5">Cart Empty</h1>
                    </div>
                    </div>
                }
            </div>

        </>
    )
}

export default Cart