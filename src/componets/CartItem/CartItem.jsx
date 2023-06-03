import { CartContext } from "../context/CartContext";
import {useContext} from "react";
import "./cartItem.css"

const CartItem = ({id,Title,quantity,Img,Price})=> {
    
    const {removeItem}= useContext(CartContext);
    
    return(
        <>
        <div className="cartItemContainer">
            <div>{Title}</div>
            <img src={Img}></img>
            <div>Cantidad: {quantity}</div>
            <div>Precio: ${Price}</div>
            <div>Subtotal: ${Price*quantity}</div>
            <button className="cartItemButton" onClick={()=>removeItem(id)}>Borrar producto</button>
        </div>
        <hr></hr>
        </>
    )
}


export default CartItem
