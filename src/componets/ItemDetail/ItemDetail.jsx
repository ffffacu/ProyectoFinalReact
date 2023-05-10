import ItemCount from "../ItemCount";
import "./ItemDetail.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemDetail = ({id,name,description,category,img,stock,precio}) =>{
    return(
        <article className="detailItem">
           <Card className="detailContainer">
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title className="itemNameDetail">{name}</Card.Title>
        <Card.Text className="itemDescription">{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Precio: <b>${precio}</b></ListGroup.Item>
        <ListGroup.Item>Stock: <b>{stock}</b></ListGroup.Item>
        <ListGroup.Item className="itemCount">
            <ItemCount maxCount={stock}></ItemCount>
        </ListGroup.Item>
      </ListGroup>
    </Card>
        </article>
    )
}
export default ItemDetail;