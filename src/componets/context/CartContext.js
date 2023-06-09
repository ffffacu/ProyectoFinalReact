import {createContext, useState} from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext= createContext(null);

export const CartProvider = ({children})=>{
    const [cart, setCart]= useState([])
    const [quantityProdc, setQuantityProdc] = useState(0)
    const [total, setTotal] = useState (0)

    const quantityProduct = () =>{
        const reduce = cart.reduce((accumulator, current) => accumulator + current.quantity, 0);
        return setQuantityProdc(reduce);
    }

    const clearCart = () =>{
        setCart([]);
        setQuantityProdc(0);
    }

    const totalCart = ()=>{
        const totalPrecio = cart.map(item => item.quantity*item.Price).reduce((prev, curr) => prev + curr, 0)
        return setTotal(totalPrecio)
    }

    
    const addItem =(item, quantity) =>{
        if (!isInCart(item.id)){
            setCart(e=> [...e, {...item, quantity}])
            toast.success('Producto agregado', {
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
            toast.error('Producto ya existente en el carrito', {
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
    
    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(e => e.id !== itemId);
        setCart (cartUpdated);
    }

    

    const isInCart = (itemId) => {
        return cart.some(e => e.id === itemId);
    }
    return(<CartContext.Provider value={{cart, clearCart, removeItem, addItem, quantityProduct,quantityProdc, totalCart,total, setCart}}>{children}</CartContext.Provider>)
}