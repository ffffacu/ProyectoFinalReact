import ItemDetail from "../ItemDetail";
import "./ItemList.css"



const ItemList= (props) =>{
    return (
        <div className="containerProducts">
            {props.products.map(prod => <ItemDetail key={prod.id} {...prod} />)}
        </div>
    )
}


export default ItemList