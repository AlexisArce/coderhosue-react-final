import React from "react";
import ItemCounter from "./ItemCounter";

const ItemDetail = ({ item }) => {
  return (
    <React.Fragment>
      <div className="row">
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
          <div className="text-center">
            <ItemCounter min={1} max={5} stock={100} />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">
              Agregar al carrito
            </button>
          </div>
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
