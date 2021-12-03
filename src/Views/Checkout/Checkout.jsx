import React, { useState } from "react";
import Payment from "../../Components/Payment/Payment";

function Checkout() {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div className="Checkout">
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
  );
}

export default Checkout;
