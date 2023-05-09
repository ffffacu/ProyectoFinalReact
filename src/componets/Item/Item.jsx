import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) =>{
    return(
        <article className="itemCatalogue">
            <section className="blabla">
                <img className="itemImg" src={props.img} alt={props.name} width={150} height={150}></img>
            </section>
            <section>
                <p>{props.name}</p>
                <p>Precio: ${props.precio}</p>
            </section>
            <section>
                <button className="btnDetail"><Link to={`/item/${props.id}`} >Ver detalles</Link></button>
            </section>
        </article>
    )
}

export default Item