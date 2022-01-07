import React from "react";
import { BsCartPlus } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartTable from "./CartTable"

const Cart = () => {
  const { cartList } = useCartContext();

  return (
    <div className="container">  
      <div className="row justify-content-md-center">       
        <div className="col-md-12 m-4"><h2>Carrito</h2></div>
      </div>  
      { cartList?.length 
          ? <CartTable /> 
          : <div>
                <h4>No hay items :(</h4> 
                <Link to="/" style={{textDecoration: "none"}} className="ms-4">
                    <BsCartPlus /> Comprar
                </Link>     
            </div>
        }            
    </div>
  );
};

export default Cart;
