import { CartContext } from "../context/CartContext";
import {useContext, useEffect} from "react";

const CartItem = ({id,Title,quantity,Img,Price})=> {

    const {removeItem}= useContext(CartContext);
    

    return(
        <>
        <div>
            <div>{Title}</div>
            <img src={Img}></img>
            <div>Cantidad: {quantity}</div>
            <div>Precio: ${Price}</div>
            <div>Subtotal: ${Price*quantity}</div>
            <button onClick={()=>removeItem(id)}>Borrar producto</button>
        </div>
        </>
    )
}


export default CartItem
