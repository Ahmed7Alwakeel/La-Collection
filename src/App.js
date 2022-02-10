
import './App.scss';
import React from 'react';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './component/navbar/navbar';
import Home from './component/home/home';
import Product from './component/products/products';
import Details from './component/productDetails/productDetails';

import Cart from './component/cart/cart';




function App() {
  return (
    <>

      <Router>
        <ToastContainer/>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
         <Route path="/productDetails/:id" exact component={Details}/>
         <Route path="/cart" exact component={Cart}/>

         </Switch>
      </Router>
    
    </>
  );
}

export default App;
