import React from "react";
import { useCartContext } from "../context/CartContext";
import CartTable from "./CartTable"
import EmptyCart from "./EmptyCart"

const Cart = () => {
  const { cartList } = useCartContext();

  return (
    <div className="container">  
      <div className="row justify-content-md-center">       
        <div className="col-md-12 m-4"><h2>Carrito</h2></div>
      </div>  
      { cartList?.length ? <CartTable /> : <EmptyCart /> }            
    </div>
  );
};

export default Cart;
