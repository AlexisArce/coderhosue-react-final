import { BsCartPlus } from 'react-icons/bs';
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (<div>
                <h4>No hay items :(</h4> 
                <Link to="/" style={{textDecoration: "none"}} className="ms-4">
                    <BsCartPlus /> Comprar
                </Link>     
            </div>);
}
 
export default EmptyCart;