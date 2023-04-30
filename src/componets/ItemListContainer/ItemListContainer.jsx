import ItemCount from "../ItemCount";
import { useState, useEffect } from "react";
import {getProducts} from "../../asyncMocks";
import ItemList from "../ItemList";


const ItemListContainer = () =>{
    
    const [product, setProducts]= useState([]);

    useEffect (()=>{
        getProducts ().then (resp =>{
            setProducts (resp)
        }).catch(error =>{
            console.error (error);
        })
    }, []);

    return(
        <div>
            <h1>Catalogo</h1>
            <ItemList  products={product}  />
        </div>
        
    )
}

export default ItemListContainer