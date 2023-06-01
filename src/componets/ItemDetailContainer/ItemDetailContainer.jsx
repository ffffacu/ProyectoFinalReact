import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { getCollection } from "../../utils/getFirestore";


const ItemDetailContainer = () =>{
    const [product, setProducts]= useState([]);
    const {itemId}= useParams();

    useEffect(() => {
        getCollection("Items").then((res) => {
            const producto = res;
            if (itemId) {
                const productoFiltrado = producto.find(
                (prod) => prod.id == itemId || itemId == 0
                );
                setProducts(productoFiltrado);
                return;
            }
                setProducts(producto);
            });
            }, [itemId]);
    
    return(
        <div>
            <ItemDetail {...product} />
        </div>
        
    )
}

export default ItemDetailContainer;