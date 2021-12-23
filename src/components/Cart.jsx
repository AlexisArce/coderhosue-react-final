import React from "react";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { cartList, clearCart } = useCartContext();

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col">
          <ul className="list-group">
            {cartList.map((prod) => (
              <li clasName="list-group-item">
                {prod.title} {prod.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className=" col-md-2">
          <button className="btn btn-danger" onClick={clearCart}>
            Vaciar Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
