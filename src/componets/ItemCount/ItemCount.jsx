import { useCount} from "./hook/useCount";
import "./ItemCount.css";

const ItemCount= ({maxCount, addCart}) =>{
    const {quantity , increment, decrement}= useCount(1,1,maxCount)
    

    

return(
    <>
    <div className="containerAddCar">
        <div className="amount">
            <div className="amountIncrementDecrement">
            <button className="amountIncrease" onClick={increment}>+</button>
            <h3 className="amountTotal">{quantity}</h3>
            <button className="amountDecrease" onClick={decrement}>-</button>
            </div>
        </div>
        <div className="amountResetAddCar">
        <button className="btnAddCar" onClick={addCart}>Agregar al carrito</button>
        <button className="btnReset"  >Terminar Compra</button>
        </div>
    </div>
    </>
)
}

export default ItemCount;