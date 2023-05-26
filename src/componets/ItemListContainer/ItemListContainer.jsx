import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getProducts, getProductsByCategory} from "../../asyncMocks";
import ItemList from "../ItemList";

const ItemListContainer = () =>{
    const [product, setProducts]= useState([]);
    const {categoryId}=useParams();

    useEffect (()=>{
        const asyncFunc= categoryId ? getProductsByCategory : getProducts;
        asyncFunc(categoryId).then (resp =>{
        setProducts(resp);
        }).catch(error =>{
            console.error (error);
        })
    }, [categoryId]);

    return(
        <div>
            <h1>{product.category}</h1>
            <ItemList  products={product}  />
        </div>
        
    )
}

export default ItemListContainer