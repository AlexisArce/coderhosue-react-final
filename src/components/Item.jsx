import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import ItemCounter from "./ItemCounter";
import GoCart from "./GoCart";

const Item = ({ item }) => {
  const navigate = useNavigate();
  const [goCart, setGoCart] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    item.quantity = quantity;
    addToCart(item);
    setGoCart(true);
  };

  function viewItemDetails() {
    navigate(`/item/${item.id}`);
  }

  return (
    <div className="card my-2">
      <img
        src={item.image}
        className="card-img-top p-2"
        alt={item.title}
        width="300"
        height="300"
        onClick={viewItemDetails}
      />
      <div className="card-body">
        <h5 className="card-title" onClick={viewItemDetails}>
          {item.title}
        </h5>
        <p className="card-text badge bg-secondary">$ {item.price}</p>
        {goCart ? (
          <GoCart />
        ) : (
          <ItemCounter min={1} max={5} stock={100} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default Item;
