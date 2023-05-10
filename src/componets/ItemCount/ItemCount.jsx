import { useCount } from "./hook/useCount";
import "./ItemCount.css";

const ItemCount= (props) =>{
  const {count, reset , increment, decrement}= useCount(1,1,props.maxCount) //agregar stock remplazando el 10
return(
    <>
    <div className="containerAddCar">
        <div className="amount">
            <div className="amountIncrementDecrement">
            <button className="amountIncrease" onClick={increment}>+</button>
            <h3 className="amountTotal">{count}</h3>
            <button className="amountDecrease" onClick={decrement}>-</button>
            </div>
        </div>
        <div className="amountResetAddCar">
        <button className="btnAddCar" >Agregar al carrito</button>
        <button className="btnReset" onClick={reset}>Borrar</button>

        </div>
    </div>
    </>
)
}

export default ItemCount;