import React, { useState } from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { RiChatDeleteFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ModalGenerateOrder from "./ModalGenerateOrder";

const CartTable = () => {
  const { cartList, clearCart, getTotalAmount, removeItem } = useCartContext();
  const [modalShow, setModalShow] = useState(false);

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
                    <MdRemoveCircleOutline
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        removeItem(prod.id);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row align-items-end mt-4">
        <div className="col-md-2 offset-md-10">
          <strong>Total: $ {getTotalAmount()}</strong>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 offset-md-8">
          <div className="d-grid gap-2">
            <button
              className="btn btn-success"
              onClick={() => setModalShow(true)}
            >
              Generar orden
            </button>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-4 offset-md-8">
          <span onClick={clearCart} style={{ color: "red", cursor: "pointer" }}>
            <RiChatDeleteFill /> Vaciar carrito
          </span>
          <Link to="/" style={{ textDecoration: "none" }} className="ms-4">
            <BsCartPlus /> Seguir comprando
          </Link>
        </div>
      </div>
      <ModalGenerateOrder show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
};

export default CartTable;
