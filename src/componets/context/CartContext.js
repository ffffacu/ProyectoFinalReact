import {createContext, useState} from "react";

export const CartContext= createContext(null);

export const CartProvider = ({children})=>{
    const[cart, setCart]= useState([])

    console.log(cart)
    
    const addItem =(item, quantity) =>{
        if (!isInCart(item.id)){
            setCart(e=> [...e, {...item, quantity}]);
        }else{
            console.error("El producto ya fue agregado al carrito")
        }
    }

    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(e => e.id !== itemId);
        setCart (cartUpdated);
    }

    const clearCart = () =>{
        setCart = ([])
    }

    const isInCart = (itemId) => {
        return cart.some(e => e.id === itemId);
    }
    

    return(<CartContext.Provider value={{cart, clearCart, removeItem, addItem}}>{children}</CartContext.Provider>)
 
}