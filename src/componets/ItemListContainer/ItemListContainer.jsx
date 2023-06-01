import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import { getCollection } from "../../utils/getFirestore";

const ItemListContainer = () =>{
    const [product, setProducts]= useState([]);
    const {categoryId}=useParams();
    
    useEffect(() => {
            getCollection("Items").then((res) => {
                const producto = res;
                if (categoryId) {
                    const productoFiltrado = producto.filter(
                    (prod) => prod.CategoryId == categoryId || categoryId == 0
                    );
                    setProducts(productoFiltrado);
                    return;
                }
                    setProducts(producto);
                });
                }, [categoryId]);
    return (
        <div>
            {product.length>0 ? (<ItemList  products={product} />) : (<h1>Cargando</h1>)}
        </div>
        
    )
}


export default ItemListContainer;