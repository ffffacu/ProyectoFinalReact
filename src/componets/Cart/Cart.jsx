import { CartContext } from "../context/CartContext";
import {useContext, useEffect} from "react";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart =() =>{
    const {cart,clearCart,quantityProduct,total,totalCart,quantityProdc}= useContext(CartContext);
    useEffect(()=>{quantityProduct()
        totalCart()
    },[cart])



    return (
        <div className="containerProducts">
            <div style={{display: quantityProdc > 0 ? 'block' : 'none'}}>
            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <h2>Total: $ {total}</h2>
            <button onClick={(e)=> clearCart (e)}>Vacias Carrito</button>
            <button><Link to="/checkout">Finalizar Compra</Link></button>
            </div>
            <div style={{display: total == 0 ? 'block' : 'none'}}>
                <h2>Carrito Vacio</h2>
                <button><Link to="/">Volver a Comprar</Link></button>
            </div>
        </div>
    )
}

export default Cart;