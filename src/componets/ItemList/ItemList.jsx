import Item from "../Item";
import "./ItemList.css"

const ItemList= (props) =>{
    const productStock=props.products.filter((e)=>e.Stock >0)
    
    return (
        <div className="containerProducts">
            {productStock.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}


export default ItemList