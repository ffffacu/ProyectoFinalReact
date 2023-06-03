import { CartContext } from "../context/CartContext";
import {useContext, useEffect} from "react";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./cart.css"

const Cart =() =>{
    const {cart,clearCart,quantityProduct,total,totalCart,quantityProdc}= useContext(CartContext);
    useEffect(()=>{quantityProduct()
        totalCart()
    },[cart])

    return (
        <div>
            <div  className="cartContainer" style={{display: quantityProdc > 0 ? 'block' : 'none'}}>
            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <h1>Total de la compra: $ {total}</h1>
            <div className="cartButton">
                <button className="containarButtonEmpty" onClick={(e)=> clearCart (e)}>Vacias Carrito</button>
            <button className="containarButtonEmpty"><Link to="/checkout">Finalizar Compra</Link></button>
            </div>
            
            
            </div>
            <div className="cartContainerEmpty" style={{display: total == 0 ? 'block' : 'none'}}>
                <h1>Carrito Vacio</h1>
                <button className="containarButtonEmpty"><Link to="/">Volver a Comprar</Link></button>
            </div>
        </div>
    )
}

export default Cart;