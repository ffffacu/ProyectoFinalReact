import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const {AddProductCart} = useContext(CartContext)
  console.log(AddProductCart);
    return(
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <a className="active cardSubli"  href="#">
        <div>
          <div className="cartSubliCant"></div>
          <div><i className="bi bi-cart cartSubli">{AddProductCart}</i></div>
        </div>
      </a>
      </div>
      
    )
}

export default CartWidget;