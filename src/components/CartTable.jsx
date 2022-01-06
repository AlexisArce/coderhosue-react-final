import React from 'react';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { Button } from "react-bootstrap"
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
                            <td>
                            <MdRemoveCircleOutline />                            
                            </td>
                        </tr>
                    ))}
                    </tbody>                   
                </table>
            </div>
        </div>
        <div className="row align-items-end">
            <div className="col-md-2 offset-md-8">Total: </div>
            <div className="col-md-2">$ {getTotalAmount()}</div>
        </div>
        <div className="row">
            <div className=" col-md-2">
            <button className="btn btn-danger" onClick={clearCart}>
                Vaciar Carrito
            </button>
            </div>
        </div>
      </React.Fragment>
    );
}
 
export default CartTable;