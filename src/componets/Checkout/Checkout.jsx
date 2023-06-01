import { CartContext } from "../context/CartContext";
import {useContext, useState} from "react";
import { createOrder, updateOrder } from "../../utils/createUpdateFirestore";
import CheckoutForm from "../CheckoutForm";
import { Link } from "react-router-dom";
import "./checkout.css"

const Checkout = () =>{
    const {cart,total}= useContext(CartContext);
    const [orderId, setOrderId]= useState(null)

        const handlerAddCart = async ({email,name,phone}) => {

          cart.forEach((e)=>{updateOrder(e.id, e.quantity)})
        const user = {
          name: name,
          phone:phone,
          email: email
        }
        const item = cart
        const cartTotal = total
        
        createOrder(item, user,cartTotal).then((result) => {
              setOrderId(result)
            });
          };

    return (<div>
    {orderId != null ? (<div className="container">
                          <h1>Tu orden es: {orderId}</h1>
                          <button className="containerButton"><Link to="/" >Volver a la tienda</Link></button>
                        </div>) :
    (<CheckoutForm  onConfirmOrder={handlerAddCart}></CheckoutForm>)}
    </div>)
}
export default Checkout