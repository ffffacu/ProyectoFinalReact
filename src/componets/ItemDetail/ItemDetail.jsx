import ItemCount from "../ItemCount";
import "./ItemDetail.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({id,name,description,category,img,stock,precio}) =>{
   const [quantityAdd, setQuantityAdd] = useState(0)
   const {addItem}= useContext(CartContext)

  const handleOnAdd = (quantity) =>{
    setQuantityAdd(quantity)

    const item = {
      id, name, precio
    }

    addItem (item, quantity)
  }


    return(
        <article className="detailItem">
          <Card className="detailContainer">
      <Card.Img className="imgDetail" variant="top" src={`../${img}`} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Precio: <b>${precio}</b></ListGroup.Item>
        <ListGroup.Item>Stock: <b>{stock}</b></ListGroup.Item>
        <ListGroup.Item className="itemCount">
            <ItemCount maxCount={stock} addCart={handleOnAdd}></ItemCount>
        </ListGroup.Item>
      </ListGroup>
    </Card>
        </article>
    )
}
export default ItemDetail;