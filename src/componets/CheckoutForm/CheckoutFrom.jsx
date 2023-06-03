import { CartContext } from "../context/CartContext";
import {useContext, useState} from "react";
import { ToastContainer,toast } from 'react-toastify';




const CheckoutForm = ({onConfirmOrder}) =>{
    const [email,setEmail]= useState("");
    const [repetirEmail, setRepetirEmail]=useState("")
    const [name,setName]= useState("");
    const [phone,setPhone]= useState("");
    const {clearCart}= useContext(CartContext);
    

    const handleConfirm = (event)=>{
        event.preventDefault()

      if(email == repetirEmail){
        const userData = {
          name, phone, email
      }
        onConfirmOrder(userData);
      clearCart()
      toast.success('Su pedido fue creado con exito', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      }else{
        toast.error('Email no coinciden', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }

    }


    return(/*<div>
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

</div>*/
<div className="container">
  <form className="row g-3" onSubmit={handleConfirm}>
        <div className="col-12">
          <label for="name" className="form-label">Nombre: </label>
          <input className="from-control" placeholder="Escribe tu nombre" type="text" id="name" value={name} name="name" required onChange={({target})=> setName(target.value)} />
        </div>
        <div className="col-12">
        <label for="email" className="form-label">Email: </label>
        <input type="email" className="from-control" placeholder="Escribe tu email" id="email" value={email} name="email" required onChange={({target})=> setEmail(target.value)} />
        </div>
        <div className="col-12">
        <label for="Repetir email" className="form-label">Rpetir email: </label>
        <input type="email" className="from-control" placeholder="Escribe tu email" id="Repetir email" value={repetirEmail}   name="Repetir email" required onChange={({target})=> setRepetirEmail(target.value)}  />
        </div>
        <div className="col-12">
        <label for="phone" className="form-label">Telefono: </label>
        <input type="text" value={phone} className="from-control" id="phone" placeholder="Escribe tu telefono" name="phone" required onChange={({target})=> setPhone(target.value)} />
        </div>
        <div className="col-12">
  <button className="containerButton" type="submit"> Finalizar pedido</button>
  <ToastContainer />
  </div>
  </form>
</div>
)

}

export default CheckoutForm