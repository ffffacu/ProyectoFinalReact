import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) =>{
    return(
        <article className="itemCatalogue">
            <section className="itemImgContainer">
            <Link to={`/item/${props.id}`} > <img className="itemImg" src={props.Img} alt={props.Title}></img></Link>
            </section>
            <section>
                <p className="itemName">{props.Title}</p>
                <p>${props.Price}</p>
            </section>
            <section>
                <button className="btnDetail"><Link to={`/item/${props.id}`} >Ver detalles</Link></button>
            </section>
        </article>
    )
}

export default Item