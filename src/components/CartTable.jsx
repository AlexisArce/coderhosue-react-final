import React from 'react';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { BsCartPlus } from 'react-icons/bs';
import { RiChatDeleteFill } from 'react-icons/ri'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartTable = () => {
    const { cartList, clearCart, getTotalAmount } = useCartContext();

    return ( 
    <React.Fragment>        
        <div className="row justify-content-md-center">       
            <div className="col-md-12">
                <table id="items-table" className="table table-hover table-light">
                    <thead>
                    <tr>                      
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartList.map((prod) => (
                        <tr key={prod.id}>                 
                            <th scope="row">{prod.title}</th> 
                            <td>{prod.price}</td>
                            <td>{prod.quantity}</td>
                            <td>{prod.price * prod.quantity}</td>
                            <td><MdRemoveCircleOutline /></td>
                        </tr>
                    ))}
                    </tbody>                   
                </table>
            </div>
        </div>        
        <div className="row align-items-end mt-4">
            <div className="col-md-1 offset-md-10"><strong>Total:</strong></div>
            <div className="col-md-1"><strong>$ {getTotalAmount()}</strong></div>
        </div>
        <div className="row mt-5">
            <div className=" col-md-5 offset-md-7">
                <span onClick={clearCart} style={{color:"red", cursor: "pointer"}}>
                    <RiChatDeleteFill /> Vaciar Carrito
                </span>
                <Link to="/" style={{textDecoration: "none"}} className="mx-4">
                    <BsCartPlus /> Seguir comprando
                 </Link>
                  <button className="btn btn-success">
                      Generar orden <FaFileInvoiceDollar />
                  </button>
            </div>
        </div>
      </React.Fragment>
    );
}
 
export default CartTable;