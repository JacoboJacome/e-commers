import React, { useRef, useEffect, useContext } from "react";
import './Payment.css'
import ProductContext from "../../Context/ProductsContext"

export default function Payment() {

  const {state} = useContext(ProductContext)
  const {priceTotal} = state
  const paypal = useRef();
  
  useEffect(() => {
    window.paypal.Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: priceTotal,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
           await actions.order.capture();
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [priceTotal]);
  
  return (
    <div>
      <div className='paypal-container' ref={paypal}></div>
    </div>
  );
}
