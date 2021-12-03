import React, { useContext, useState, useEffect } from 'react'

import "./ProductsCart.styles.css"
import ProductsContext from '../../Context/ProductsContext'

import whatsapp from "../../Assets/whatsapp.png"


const ProductsCart = ( ) => {

    const [text, setText] = useState('')

    const { state, dispatch } = useContext(ProductsContext)

    useEffect(() => {
        setText(state.cart.map(item => item.name));
    }, [ state ])
    const textString = text.toString()
    const order = `${textString}, Total:$ ${state.priceTotal}`;
    const message = `https://api.whatsapp.com/send?phone=573205555026&text=${order}`

    return (
        
            <div className="productoss">

                {
                    state?.cart.map( x => 
                        
                        <div key={x.idCard} className={x !== false ? "products-cart" : "hidden"}>
                            <img src={ x !== false && x.imgs["img1"]} alt="" />                      
                            <h2 className="product-name">{x.name}</h2>
                            <h2>{`$ ${x.price} USD`}</h2>
                            <h2>{ `Cantidad: ${x.amount}` }</h2>
                            <div className="container-btn">    
                                <button onClick={()=> dispatch ({type:"REMOVE_ONE", payload:  x })}><i className="fas fa-minus rotate"></i></button>
                                <button onClick={()=> dispatch ({type:"ADD_TO_CART", payload: x })}><i className="fas fa-plus rotate"></i></button>
                            </div>
                                <button onClick={()=> dispatch({type:"REMOVE_FROM_CART", payload: x  })} className=" bg-red-700 text-white py-1 px-2 rounded-xl">{x !== false && <i class="fas fa-trash-alt"></i>}</button>
                        </div>

                    )
                }
                        <div className="facturacion">
                            <h2 className="font-bold">DATOS DE FACTURACION</h2>
                           <div className="datos">
                            <h3>{`Productos Seleccionados: ${state.cart.length}`}</h3>                          
                            <h3>{

                               `Productos Totales: ${ state.cart.length > 0 ? state?.cart?.map( a => a.amount).reduce( (a,b)=> a+b) : 0}`
  
                            }</h3>
                            <h4>{`Precio Total: $ ${state.priceTotal}`}</h4>
                           </div>
                           <h3 className="mb-2">Hace tu pedido por whatsapp</h3>
                            <a href={message} target='_blank' rel="noreferrer"><img src={whatsapp} alt=""  className="img-whats"/></a>
                        </div>
            </div>

    )
}

export default ProductsCart
