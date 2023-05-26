import { useState } from "react";

export const useCount = (initial= 0, min,max )=>{
    if ( initial < min || initial > 0) initial = min;
    const [quantity, setQuantity] = useState (initial);

    const reset = () =>{
        setQuantity(initial);
    }

    const increment = () =>{
        if(quantity < max) setQuantity((prev) => prev + 1);
    }

    const decrement = () =>{
        if(quantity > min) setQuantity((prev) => prev - 1);
    }
    
    return {quantity, reset , increment, decrement};
}