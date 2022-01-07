import React, { useState } from "react";
import ItemCounter from "./ItemCounter";
import GoCart from "./GoCart";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const [goCart, setGoCart] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    item.quantity = quantity;
    addToCart(item);
    setGoCart(true);
  };

  return (
    <React.Fragment>
      <div className="row my-5">
        <div className="offset-md-1 col-md-6">
          <img
            src={item.image}
            height="400"
            width="400"
            className="grey lighten-2 p-2 "
            alt={item.title}
          />
        </div>
        <div className="col-md-4 text-center">
          <h4>{item.title}</h4>
          <p
            className="badge rounded-pill bg-secondary m-4"
            style={{ fontSize: 20 }}
          >
            $ {item.price}
          </p>
          {goCart ? (
            <GoCart />
          ) : (
            <ItemCounter min={1} max={5} stock={100} onAdd={onAdd} />
          )}
        </div>
      </div>
      <div className="row">
        <div className="offset-md-1 col-md-10">
          <div className="text--primary">{item.description}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemDetail;
