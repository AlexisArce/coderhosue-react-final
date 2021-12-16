import ItemCounter from "./ItemCounter";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();

  function viewItemDetails() {
    console.log("viewItemDetails");
    navigate(`/item/${item.id}`);
  }

  return (
    <div className="card my-2" onClick={viewItemDetails}>
      <img
        src={item.image}
        className="card-img-top p-2"
        alt={item.title}
        width="300"
        height="300"
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text badge bg-secondary">$ {item.price}</p>
        <ItemCounter min={1} max={5} stock={100} />
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="button">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
