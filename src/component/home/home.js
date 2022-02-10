import React from "react";
import Product from "../products/products";
const Home = () => {

    return (
        <>
        <section>

        
            <div className="card text-white border-0">
                <img src="online-shopping-concept-cart-bags-260nw-1680067750.jpg" className="card-img" alt="background" height="550px" />
                <div className="card-img-overlay d-flex flex-column align-item-center justify-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-primary ">
                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text fs-4">
                            CHECK OUT ALL THE TRENDS
                        </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Product/>
            </section>
        </>
    )
}
export default Home