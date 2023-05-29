import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {quantityProdc} = useContext(CartContext);


    return(
        <div className="d-grid gap-2 d-md-flex justify-content-md-end" >
      <Link className="active cardSubli" to="/Cart" style={{display: quantityProdc > 0 ? 'block' : 'none'}}> 
        <div>
          <div className="cartSubliCant"></div>
          <div><i className="bi bi-cart cartSubli">{quantityProdc}</i></div>
        </div>
      </Link>
      </div>
      
    )
}

export default CartWidget;