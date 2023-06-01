import { CartContext } from "../context/CartContext";
import {useContext, useState} from "react";




const CheckoutForm = ({onConfirmOrder}) =>{
    const [email,setEmail]= useState("");
    const [name,setName]= useState("");
    const [phone,setPhone]= useState("");
    const {clearCart}= useContext(CartContext);
    

    const handleConfirm = (event)=>{
        event.preventDefault()

        const userData = {
            name, phone, email
        }
        
        onConfirmOrder(userData);
        clearCart()

    }


    return(<div>
    <form onSubmit={handleConfirm}>
  <label>
    Nombre:
    <input type="text" value={name} name="name" onChange={({target})=> setName(target.value)} />
  </label>
  <label>
    Telefono:
    <input type="text" value={phone} name="phone" onChange={({target})=> setPhone(target.value)} />
  </label>
  <label>
    Email:
    <input type="text" value={email} name="email" onChange={({target})=> setEmail(target.value)} />
  </label>
  <div>
  <button type="submit"> Finalizar pedido</button>
  </div>
</form>
</div>)

}

export default CheckoutForm