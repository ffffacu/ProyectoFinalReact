import {useState} from "react";
import { useCount } from "./hook/useCount";
import "./ItemCount.css";

const ItemCount= (props) =>{
  const {count, reset , increment, decrement}= useCount(1,1,10) //agregar stock remplazando el 10
return(
    <>
    <div className="containerAddCar">
        <div className="amount">
            <p>Cantidad:</p>
            <button className="amountIncrease" onClick={increment}>+</button>
            <h3 className="amountTotal">{count}</h3>
            <button className="amountDecrease" onClick={decrement}>-</button>
        </div>
        <div>
        <button className="amountDecrease" onClick={reset}>Borrar</button>
            <button className="btnAddCar"  >Agregar al carrito</button>
        </div>
    </div>
    </>
)
}

export default ItemCount;