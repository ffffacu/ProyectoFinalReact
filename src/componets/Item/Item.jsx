import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) =>{
    return(
        <article className="itemCatalogue">
            <section className="itemImgContainer">
            <Link to={`/item/${props.id}`} > <img className="itemImg" src={props.img} alt={props.name}></img></Link>
            </section>
            <section>
                <p className="itemName">{props.name}</p>
                <p>${props.precio}</p>
            </section>
            <section>
                <button className="btnDetail"><Link to={`/item/${props.id}`} >Ver detalles</Link></button>
            </section>
        </article>
    )
}

export default Item