import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="mt-5">
      <h4>No hay items :(</h4>
      <Link
        to="/"
        style={{ textDecoration: "none" }}
        className="btn btn-secondary mt-5"
      >
        <BsCartPlus /> Comprar
      </Link>
    </div>
  );
};

export default EmptyCart;
