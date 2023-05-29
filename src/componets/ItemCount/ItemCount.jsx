import { useCount} from "./hook/useCount";
import "./ItemCount.css";
import { Link } from "react-router-dom";


const ItemCount= ({maxCount, addCart, onChangeCount}) =>{
    const {quantity , increment, decrement}= useCount(1,1,maxCount)
    
    const handlerClick = () => {
        onChangeCount(quantity);
    };
    
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
        <button className="btnAddCar" onClick={handlerClick}>Agregar al carrito</button>
        <button className="btnReset"><Link to="/cart">Terminar Compra</Link></button>
        </div>
    </div>
    </>
)
}

export default ItemCount;