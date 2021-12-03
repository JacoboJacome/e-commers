import React, { useState } from 'react'


import "./Cart.styles.css"

import Payment from "../../Components/Payment/Payment";
import ProductsCart from '../../Components/ProductsCart/ProductsCart'

const Cart = () => {

    
    const [checkout, setCheckOut] = useState(false);
   

    return (
        <div className="contenedor-cart">

           <ProductsCart />


        <div className={checkout ? "Checkout2" : "Checkout"}>
                {checkout ? (
            <Payment />
        ) : (
            <button
                onClick={() => { setCheckOut(true) }}
            >
                P A G A R
            </button>
            )}
        </div>
           
        </div>
    )
}

export default Cart
