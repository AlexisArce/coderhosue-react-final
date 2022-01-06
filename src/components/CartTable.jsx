import React from 'react';
import { useCartContext } from "../context/CartContext";

const CartTable = () => {
    const { cartList, clearCart, getTotalAmount } = useCartContext();

    return ( 
    <React.Fragment>
        <div className="row justify-content-md-center">       
            <div className="col-md-12">
                <table id="items-table" className="table table-striped">
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
                            <a href="#" data-id={prod.id} className="deleteProduct" data-toggle="tooltip" data-placement="right" title="Eliminar producto">
                                <i className="bi bi-trash"></i>
                            </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                        <td colspan="3"><strong>TOTAL</strong></td><td ><strong>{getTotalAmount()} $</strong></td>`
                    </tfoot>
                </table>
            </div>
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