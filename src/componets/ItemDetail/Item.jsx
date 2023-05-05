
import "./Item.css";
import { Link } from "react-router-dom";

const ItemDetail = (props) =>{
    return(
        <article className="itemCatalogue">
            <section>
                <img src={props.img} alt={props.name} width={100} height={100}></img>
            </section>
            <section>
                <p>{props.name}</p>
                <p>Precio: ${props.precio}</p>
            </section>
            <section>
                <button className="btnDetail"><Link to={`/item/${props.id}`}>Ver detalles</Link></button>
            </section>
        </article>
    )
}

export default ItemDetail