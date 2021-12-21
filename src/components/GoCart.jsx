import { Link } from "react-router-dom";

const GoCart = () => {
  return (
    <div className="d-grid gap-2">
      <Link className="btn btn-primary" to="/cart">
        Ir al carrito
      </Link>
    </div>
  );
};

export default GoCart;
