import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import { getCollection } from "../../utils/getFirestore";
import "./itemListContainer.css";
import Footer from "../Footer";

const ItemListContainer = () =>{
    const [product, setProducts]= useState([]);
    const {categoryId}=useParams();
    
    useEffect(() => {
            getCollection("Items").then((res) => {
                const products = res;
                if (categoryId) {
                    const productsFilter = products.filter(
                    (prod) => prod.CategoryId == categoryId || categoryId == 0
                    );
                    setProducts(productsFilter);
                    return;
                }
                    setProducts(products);
                });
                }, [categoryId]);
    return (
        <div>
            {product.length >0 ? (<>
                <ItemList  products={product} />
            </>) : (
            <div className="containerLoading">
                <div className="itemLoading">Cargando...</div>
                <div className="circleLoading"></div>
            </div>
            )}
        </div>
        
    )
}


export default ItemListContainer;