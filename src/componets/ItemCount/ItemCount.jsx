import {useState} from "react";
import "./ItemCount.css";

const ItemCount= (props) =>{
    const [amount, setAmount] = useState (0);
    const stock = props.stock;
    
    if (amount < 0){
        setAmount(0);
    }
return(
    <>
    <div className="containerAddCar">
        <div className="amount">
            <p>Cantidad:</p>
            <button className="amountIncrease" onClick={()=>setAmount(amount +1)}>+</button>
            <h3 className="amountTotal">{amount}</h3>
            <button className="amountDecrease" onClick={()=>setAmount(amount -1)}>-</button>
        </div>
        <div>
            <button className="btnAddCar" onClick={()=> props.onAdd(amount)} disabled={!stock}>Agregar al carrito</button>
        </div>
    </div>
    </>
)
}

export default ItemCount;