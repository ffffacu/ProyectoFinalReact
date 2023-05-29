import {createContext, useState} from "react";

export const CartContext= createContext(null);

export const CartProvider = ({children})=>{
    const[cart, setCart]= useState([])
    const [quantityProdc, setQuantityProdc] = useState(0)
    const [total, setTotal] = useState (0)

    const quantityProduct = () =>{
        const reduce = cart.reduce((accumulator, current) => accumulator + current.quantity, 0);
        return setQuantityProdc(reduce);
    }

    const totalCart = ()=>{
        const totalPrecio = cart.map(item => item.quantity*item.precio).reduce((prev, curr) => prev + curr, 0)
        return setTotal(totalPrecio)
    }

    
    const addItem =(item, quantity) =>{
        if (!isInCart(item.id)){
            setCart(e=> [...e, {...item, quantity}]
                )

        }else{
            console.error("El producto ya fue agregado al carrito")
        }
    }

    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(e => e.id !== itemId);
        setCart (cartUpdated);
    }

    const clearCart = () =>{
        setCart=([])
    }

    const isInCart = (itemId) => {
        return cart.some(e => e.id === itemId);
    }
    return(<CartContext.Provider value={{cart, clearCart, removeItem, addItem, quantityProduct,quantityProdc, totalCart,total}}>{children}</CartContext.Provider>)
}