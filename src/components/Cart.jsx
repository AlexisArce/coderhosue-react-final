import React from "react";
import { useCartContext } from "../context/CartContext";
import CartTable from "./CartTable"

const Cart = () => {
  const { cartList, clearCart } = useCartContext();

  return (
    <div className="container">    
      { cartList?.length ? <CartTable /> : <h3>No hay items :(</h3>}            
    </div>
  );
};

export default Cart;
