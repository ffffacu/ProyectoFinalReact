import { CartContext } from "../context/CartContext";
import {useContext, useEffect} from "react";

const CartItem = ({id,name,quantity,img,precio})=> {

    const {removeItem}= useContext(CartContext);

    return(
        <>
        <div>
            <div>{name}</div>
            <img src={img}></img>
            <div>Cantidad: {quantity}</div>
            <div>Precio: {precio}</div>
            <div>Subtotal: {precio*quantity}</div>
            <button onClick={()=>removeItem(id)}>Borrar producto</button>
        </div>
        </>
    )
}


export default CartItem
