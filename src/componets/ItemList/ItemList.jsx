import Item from "../Item";
import "./ItemList.css"



const ItemList= (props) =>{
    return (
        <div className="containerProducts">
            {props.products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}


export default ItemList