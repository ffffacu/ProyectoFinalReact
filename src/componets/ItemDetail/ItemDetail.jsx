import ItemCount from "../ItemCount";
import "./ItemDetail.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({id,Title,Description,Img,Stock,Price}) =>{
  const {addItem, quantityProduct, cart, totalCart}= useContext(CartContext)

console.log(id);

  useEffect(()=>{quantityProduct()},[cart])

  const handleOnAdd = (quantity) =>{
    const item = {
      id, Title, Price, Img
    }
    addItem (item, quantity)
  }

  
    return(
        <article className="detailItem">
          <Card className="detailContainer">
      <Card.Img className="imgDetail" variant="top" src={Img} alt={Title} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Precio: <b>${Price}</b></ListGroup.Item>
        <ListGroup.Item>Stock: <b>{Stock}</b></ListGroup.Item>
        <ListGroup.Item className="itemCount">
            <ItemCount maxCount={Stock} onChangeCount={(e) => handleOnAdd(e)} ></ItemCount>
        </ListGroup.Item>
      </ListGroup>
    </Card>
        </article>
    )
}
export default ItemDetail;