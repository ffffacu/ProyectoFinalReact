import ItemCount from "../ItemCount";
import "./ItemDetail.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({id,name,description,category,img,stock,precio}) =>{
  const {addItem, quantityProduct, cart, totalCart}= useContext(CartContext)

  useEffect(()=>{quantityProduct()},[cart])

  const handleOnAdd = (quantity) =>{
    const item = {
      id, name, precio, img
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
            <ItemCount maxCount={stock} onChangeCount={(e) => handleOnAdd(e)} ></ItemCount>
        </ListGroup.Item>
      </ListGroup>
    </Card>
        </article>
    )
}
export default ItemDetail;