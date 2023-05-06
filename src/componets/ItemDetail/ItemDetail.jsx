
const ItemDetail = ({id,name,description,category,img,stock,precio}) =>{
    return(
        <article className="itemCatalogue">
            <section>
                <p>Precio: {name} </p>
            </section>
        </article>
    )
}
export default ItemDetail;