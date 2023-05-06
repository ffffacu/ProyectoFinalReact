import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getProducts, getPorductsById} from "../../asyncMocks";
import ItemDetail from "../ItemDetail";


const ItemDetailContainer = () =>{
    const [product, setProducts]= useState([]);
    const {itemId}= useParams();
    useEffect (()=>{
        getPorductsById(itemId).then (resp =>{
        setProducts(resp);
        }).catch(error =>{
            console.error (error);
        })
    }, [itemId]);
    
    return(
        <div>
            <ItemDetail {...product} />
        </div>
        
    )
}

export default ItemDetailContainer;