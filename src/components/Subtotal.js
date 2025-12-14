import React from "react";
import "../CSS/Subtotal.css";
import { NumericFormat } from "react-number-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <NumericFormat
        value={getBasketTotal(basket)}
        decimalScale={2}
        thousandSeparator
        prefix="€"
        displayType="text"
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />


      <button onClick={(e) => navigate.push("/payment")}>
        proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
